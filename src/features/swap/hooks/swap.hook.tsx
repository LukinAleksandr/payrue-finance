import { AxiosError } from 'axios';
import { ethers } from 'ethers';
import { useState, useEffect, useMemo, useCallback } from 'react';
import toast from '../../../app/services/notifications-service';
import { fetchSwapToken } from '../../../app/services/swap-service';
import { useAppDispatch, useAppSelector } from '../../../app/store';
import {
  useFetchCoinsListQuery,
  useFetchEtherPriceQuery,
  useFetchPayPriceQuery,
  useFetchReceivePriceQuery,
} from '../../coin-gecko';
import { setGasFee, Token } from '../../network/slice';
import { tokenABI } from '../../network/utils/abi';

function useSwap() {
  const dispatch = useAppDispatch();
  const slippagePercentage = useAppSelector(
    (state) => state.networks.slippagePercentage,
  );
  const selectedNetwork = useAppSelector((state) => state.networks.network);
  const tokens = useAppSelector((state) => state.networks.tokens);
  const address = useAppSelector((state) => state.networks.address);
  const web3 = useAppSelector((state) => state.networks.web3);
  const liquidity = useAppSelector((state) => state.networks.liquidity);
  const gasFee = useAppSelector((state) => state.networks.gasFee);
  const [pay, setPay] = useState<Token | null>(null);
  const [receive, setReceive] = useState<Token | null>(null);
  const [payBalance, setPayBalance] = useState('0');
  const [receiveBalance, setReceiveBalance] = useState('0');
  const [payAmount, setPayAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const [networkFee, setNetworkFee] = useState(0);

  const { data: coins = [] } = useFetchCoinsListQuery();

  const payCoin = useMemo(
    () =>
      coins
        .filter(({ id }) => id !== 'unicorn-token')
        .find(
          (c) =>
            c.symbol.toLocaleLowerCase() === pay?.value.toLocaleLowerCase(),
        ),
    [coins, pay],
  );

  const receiveCoin = useMemo(
    () =>
      coins
        .filter(({ id }) => id !== 'unicorn-token')
        .find(
          (c) =>
            c.symbol.toLocaleLowerCase() === receive?.value.toLocaleLowerCase(),
        ),
    [coins, receive],
  );

  const { data: etherPrice = {}, refetch: refetchEtherPrice } =
    useFetchEtherPriceQuery();

  const { data: payBalanceTo = {}, refetch: refetchPayPrice } =
    useFetchPayPriceQuery(
      {
        id: payCoin?.id || '',
        vsCurrency: [receiveCoin?.id || ''],
      },
      {
        skip: !payCoin || !receiveCoin,
      },
    );

  const { data: receiveBalanceTo = {}, refetch: refetchReceivePrice } =
    useFetchReceivePriceQuery(
      {
        id: receiveCoin?.id || '',
        vsCurrency: [payCoin?.id as string],
      },
      {
        skip: !receiveCoin || !payCoin,
      },
    );

  const getBalances = useCallback(async () => {
    if (pay?.address && web3 && address) {
      if (['BNB', 'ETH', 'MATIC'].includes(pay.value)) {
        web3.eth.getBalance(address).then((e: string) => {
          const finalBalance = web3.utils.fromWei(e, 'ether');
          setPayBalance(finalBalance);
        });
      } else {
        const tokenInst = new web3.eth.Contract(tokenABI, pay.address);
        const balance = await tokenInst.methods.balanceOf(address).call();
        const finalBalance = web3.utils.fromWei(balance, 'ether');
        setPayBalance(finalBalance);
      }
    }
    if (receive?.address && web3 && address) {
      if (['BNB', 'ETH', 'MATIC'].includes(receive.value)) {
        web3.eth.getBalance(address).then((e: string) => {
          const finalBalance = web3.utils.fromWei(e, 'ether');
          setReceiveBalance(finalBalance);
        });
      } else {
        const tokenInst = new web3.eth.Contract(tokenABI, receive.address);
        const balance = await tokenInst.methods.balanceOf(address).call();
        const finalBalance = web3.utils.fromWei(balance, 'ether');
        setReceiveBalance(finalBalance);
      }
    }
  }, [pay, receive, address, web3]);

  const refetch = useCallback(() => {
    refetchPayPrice();
    refetchReceivePrice();
    refetchEtherPrice();
  }, [refetchPayPrice, refetchReceivePrice, refetchEtherPrice]);

  const handleChange = useCallback(() => {
    setPay(receive);
    setReceive(pay);
  }, [pay, receive]);

  useEffect(() => {
    if (tokens.length && selectedNetwork) {
      const token = tokens.find(
        (c) => c.value === selectedNetwork.nativeCurrency.symbol,
      );

      if (token) {
        setPay(token);

        if (selectedNetwork.nativeCurrency.symbol === 'BNB') {
          const propel = tokens.find((c) => c.value === 'Propel');
          setReceive(propel || token);
        } else {
          setReceive(token);
        }
      }
    }
  }, [tokens, selectedNetwork]);

  const handleSwap = useCallback(async () => {
    const err = [];
    if (!pay) err.push('Pay');
    if (!receive) err.push('Receive');
    if (!payAmount) err.push('Amount');
    if (err.length > 0) {
      toast({
        type: 'error',
        message: `Please fill fields (${err.join(',')})`,
      });
    } else {
      setLoading(true);

      if (
        web3 &&
        receive &&
        address &&
        selectedNetwork &&
        pay &&
        slippagePercentage &&
        liquidity
      ) {
        const finalPayAmount = web3.utils.toWei(payAmount, 'ether');
        const getParams = {
          affiliateAddress: selectedNetwork.feeRecipient,
          buyToken: receive.address,
          buyTokenPercentageFee: (0.003).toString(),
          feeRecipient: selectedNetwork.feeRecipient,
          intentOnFilling: 'true',
          sellAmount: finalPayAmount,
          sellToken: pay.address,
          skipValidation: 'true',
          slippagePercentage: slippagePercentage.toString(),
          takerAddress: address,
          gasPrice: web3.utils.toWei(gasFee, 'gwei') || '',
          excludedSources:
            Object.entries(liquidity)
              .filter(([, v]) => !v)
              .map(([key]) => key)
              .join(',') || '',
        };

        try {
          const data = await fetchSwapToken(selectedNetwork.baseUrl, getParams);
          const { allowanceTarget, sellTokenAddress } = data;
          if (
            sellTokenAddress !== '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'
          ) {
            const contract = new web3.eth.Contract(tokenABI, sellTokenAddress);

            const UINT256_MAX = ethers.utils
              .parseUnits(parseFloat(payAmount).toFixed(10).toString(), 'ether')
              .toString();

            const gasPrice = await web3.eth.getGasPrice();

            await contract.methods.approve(allowanceTarget, UINT256_MAX).send({
              from: address,
              gasPrice,
              gas: Math.floor(parseInt(String(data.gas * 2), 10)).toString(),
              gasLimit: 5000000,
            });
          }

          await web3.eth.sendTransaction({
            ...data,
            gas: Math.floor(parseInt(String(data.gas * 2), 10)).toString(),
            gasLimit: 5000000,
          });

          toast({
            type: 'success',
            message: 'Transaction Successful',
          });
          getBalances();
        } catch (e) {
          const error = e as AxiosError;

          if (error.response?.data?.reason) {
            toast({
              type: 'error',
              message: error.response?.data?.reason,
            });
          }
          if (error.response?.data?.values?.message) {
            toast({
              type: 'error',
              message: error.response?.data?.values?.message,
            });
          }
          if (error.response?.data?.validationErrors) {
            const errors = error.response.data.validationErrors
              .map(
                (c: { field: string; reason: string }) =>
                  `${c.field}: ${c.reason}`,
              )
              .join(',');

            toast({
              type: 'error',
              message: errors,
            });
          }
          if (error.message) {
            toast({
              type: 'error',
              message: error.message,
            });
          }
        } finally {
          setLoading(false);
        }
      }
    }
  }, [
    pay,
    receive,
    payAmount,
    address,
    gasFee,
    liquidity,
    selectedNetwork,
    slippagePercentage,
    web3,
    getBalances,
  ]);

  const getTransactionFee = useCallback(async () => {
    if (web3 && etherPrice) {
      const gasPrice = await web3.eth.getGasPrice();

      dispatch(setGasFee(web3.utils.fromWei(gasPrice, 'gwei')));
      const transactionObject = {
        sender: address,
        gasPrice,
      };
      const gasLimit = await web3.eth.estimateGas(transactionObject);

      const fee = web3.utils.fromWei(
        web3.utils.toBN(gasPrice).mul(web3.utils.toBN(gasLimit)),
        'ether',
      );
      setNetworkFee(Number(fee) * etherPrice.usd);
    }
  }, [dispatch, etherPrice, address, web3]);

  useEffect(() => {
    if (address) {
      getBalances();
      getTransactionFee();
    }
  }, [address, selectedNetwork, getBalances, getTransactionFee, pay, receive]);

  return {
    getTransactionFee,
    networkFee,
    pay,
    setPay,
    payBalance,
    payBalanceTo,
    receive,
    refetch,
    setReceive,
    receiveBalance,
    receiveBalanceTo,
    payAmount,
    setPayAmount,
    handleChange,
    handleSwap,
    loading,
  };
}

export default useSwap;
