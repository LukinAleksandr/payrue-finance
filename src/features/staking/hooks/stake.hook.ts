import { useCallback, useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/store';
import { Network, networks } from '../../network';
import { switchNetwork } from '../../network/utils/switchNetwork';
import toast from '../../../app/services/notifications-service';
import { setChainId, setNetworkById } from '../../network/slice';
import { stakingABI, tokenABI } from '../../network/utils/abi';
import { resetCache, saveStake } from '../../../app/services/staking-service';
import { getProfileAsync } from '../../profile/async-actions';

export interface StakeHookProps {
  chainId?: string;
  stakingContractAddress?: string;
}

const propelTokenPolygon = process.env.REACT_APP_OLD_PROPEL_TOKEN_ADDRESS;
const propelTokenBsc = process.env.REACT_APP_BSC_PROPEL_TOKEN_ADDRESS;
const bscChainId = process.env.REACT_APP_BSC_CHAIN_ID || '';
const polygonChainId = process.env.REACT_APP_POLYGON_CHAIN_ID || '';

function useStake({ chainId, stakingContractAddress }: StakeHookProps) {
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const address = useAppSelector((state) => state.networks.address) || '';
  const networkId = useAppSelector((state) => state.networks.networkId);
  const web3 = useAppSelector((state) => state.networks.web3);

  const stakingContract = useMemo(
    () => web3 && new web3.eth.Contract(stakingABI, stakingContractAddress),
    [web3, stakingContractAddress],
  );

  const token = useMemo(
    () =>
      Number(chainId) === Number(polygonChainId)
        ? propelTokenPolygon
        : propelTokenBsc,
    [chainId],
  );

  const networkChanged = useCallback(
    (newNetwork: Network) => {
      dispatch(setNetworkById(newNetwork.value));
      dispatch(setChainId(newNetwork.chainId));
    },
    [dispatch],
  );

  const network = useMemo(
    () =>
      chainId
        ? networks.find((net) => net.value === Number(chainId))
        : undefined,
    [chainId],
  );

  const claim = useCallback(async () => {
    if (!network) {
      toast({
        type: 'error',
        message: `Network not found`,
      });
      return;
    }
    if (!web3) {
      toast({
        type: 'error',
        message: `Provider error`,
      });
      return;
    }

    if (!stakingContract) {
      toast({
        type: 'error',
        message: `Contract not found`,
      });
      return;
    }

    if (network.value !== networkId) {
      switchNetwork(network).then(() => {
        networkChanged(network);
        toast({
          type: 'success',
          message: `The network changed to ${network.title}`,
        });
      });
    } else {
      try {
        setLoading(true);
        await stakingContract.methods.claimReward().send({
          from: address,
          gasLimit: networkId === Number(bscChainId) ? 1500000 : 3500000,
        });
        toast({
          type: 'success',
          message: `Сlaim completed successfully`,
        });

        await resetCache(address);
        dispatch(getProfileAsync(address));
      } catch (error) {
        const message = error as string;
        toast({
          type: 'error',
          message: message || 'Something went wrong',
        });
      } finally {
        setLoading(false);
      }
    }
  }, [
    dispatch,
    stakingContract,
    network,
    address,
    networkId,
    networkChanged,
    web3,
  ]);

  const stake = useCallback(
    async (value: string, balance: string) => {
      if (Number(value) < 10000) {
        toast({
          type: 'error',
          message: 'Minimum staking is 10,000 Propel',
        });
        return;
      }

      if (Number(value) > Number(balance)) {
        toast({
          type: 'error',
          message: 'Insufficient Propel Balance',
        });
        return;
      }

      if (!network) {
        toast({
          type: 'error',
          message: `Network not found`,
        });
        return;
      }

      if (!web3) {
        toast({
          type: 'error',
          message: `Provider error`,
        });
        return;
      }

      if (network.value !== networkId) {
        switchNetwork(network).then(() => {
          networkChanged(network);
          toast({
            type: 'success',
            message: `The network changed to ${network.title}`,
          });
        });
      } else {
        try {
          const BN = web3.utils.toBN;
          // @ts-ignore
          const amount = new BN(Number(value)).mul(new BN(10 ** 18));

          if (stakingContract && address && stakingContract) {
            const propelContract = new web3.eth.Contract(tokenABI, token);

            await propelContract.methods
              .approve(stakingContractAddress, amount)
              .send({
                from: address,
                gasLimit: networkId === Number(bscChainId) ? 1500000 : 3500000,
              });

            const tx = await stakingContract.methods.stake(amount).send({
              from: address,
              gasLimit: networkId === Number(bscChainId) ? 1500000 : 3500000,
            });

            toast({
              type: 'success',
              message: `Staking completed successfully`,
            });

            await saveStake({
              amount: value.toString(),
              address,
              chainId: Number(chainId),
              txId: tx.transactionHash,
            });
          }
        } catch (error) {
          console.log(error);

          toast({
            type: 'error',
            message: 'Something went wrong',
          });
        }
      }
    },
    [
      address,
      chainId,
      networkId,
      stakingContract,
      web3,
      token,
      stakingContractAddress,
      network,
      networkChanged,
    ],
  );

  return { claim, stake, loading };
}

export default useStake;
