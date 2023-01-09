import Web3Modal from 'web3modal';
import { useCallback } from 'react';
import { ethers } from 'ethers';
import * as ls from 'local-storage';
import { initWeb3, getProviderOptions } from '../utils/web3';
import { useAppDispatch, useAppSelector } from '../store';
import {
  setAddress,
  setChainId,
  setNetworkById,
  setProvider,
  setTokens,
  setWeb3,
  setLoading,
} from '../../features/network/slice';
import bsc from '../../features/network/utils/bsc.json';
import { getProfileAsync } from '../../features/profile/async-actions';
import { clearProfile } from '../../features/profile/slice';
import { chainIdToHex } from '../utils/chains';

const bscChainId = process.env.REACT_APP_BSC_CHAIN_ID || '';

const useConnect = () => {
  const dispatch = useAppDispatch();
  const selectedNetwork = useAppSelector((state) => state.networks.network);
  const provider = useAppSelector((state) => state.networks.provider);

  const disconnect = useCallback(() => {
    if (provider) {
      setProvider(null);
      dispatch(setChainId(chainIdToHex(Number(bscChainId))));
      dispatch(setNetworkById(Number(bscChainId)));
      dispatch(setAddress(null));
      dispatch(clearProfile());
      ls.remove('WEB3_CONNECT_CACHED_PROVIDER');
      ls.remove('walletconnect');
    }
  }, [provider, dispatch]);

  const subscribeProvider = useCallback(
    async (newProvider: ethers.providers.Web3Provider) => {
      if (!newProvider.on) {
        return;
      }
      newProvider.on('accountsChanged', async (accounts: string[]) => {
        dispatch(setAddress(accounts[0]));
      });

      newProvider.on('chainChanged', async (chainId: number) => {
        dispatch(setChainId(chainId));
      });

      newProvider.on('networkChanged', async (networkId: string) => {
        dispatch(setNetworkById(Number(networkId)));
      });

      newProvider.on('disconnect', () => {
        disconnect();
      });
    },
    [disconnect, dispatch],
  );

  const connect = useCallback(async () => {
    if (selectedNetwork) {
      const web3Modal = new Web3Modal({
        network: 'mainnet', // optional
        cacheProvider: true, // optional
        providerOptions: getProviderOptions(Number(selectedNetwork.chainId)),
      });

      const connection = await web3Modal.connect();

      const web3Provider = await new ethers.providers.Web3Provider(connection);

      const currentWeb3 = initWeb3(connection);

      await subscribeProvider(connection);
      const accounts = await currentWeb3.eth.getAccounts();
      const userAddress = accounts[0];
      const networkId = await currentWeb3.eth.net.getId();
      const chainId = chainIdToHex(networkId);

      dispatch(setWeb3(currentWeb3));
      dispatch(setProvider(web3Provider));
      dispatch(setChainId(chainId));
      dispatch(setNetworkById(networkId));
      dispatch(setTokens(bsc));
      dispatch(setAddress(userAddress));
      dispatch(setLoading(false));
      dispatch(getProfileAsync(userAddress));
    }
  }, [dispatch, selectedNetwork, subscribeProvider]);

  return { connect, disconnect };
};

export { useConnect };
