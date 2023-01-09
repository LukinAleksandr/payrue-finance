import { useCallback, useEffect, useLayoutEffect } from 'react';
import Web3Modal from 'web3modal';
import ModalProvider from 'mui-modal-provider';
import CssBaseline from '@mui/material/CssBaseline';
import * as ls from 'local-storage';
import AppRouter from './app-router';
import ThemeProvider from './contexts/theme-provider';
import { getProviderOptions } from './utils/web3';
import { useAppSelector } from './store';
import { getChainData } from './utils/chains';
import { useConnect } from './hooks/use-connect';

export default function App() {
  const selectedNetwork = useAppSelector((state) => state.networks.networkId);
  const provider = useAppSelector((state) => state.networks.provider);
  const { connect } = useConnect();

  useLayoutEffect(() => {
    if (ls.get('WEB3_CONNECT_CACHED_PROVIDER') && provider === null) {
      connect();
    }
  }, [provider, connect]);

  const initWeb3Modal = useCallback(() => {
    // eslint-disable-next-line no-new
    new Web3Modal({
      network: getChainData(selectedNetwork).network,
      cacheProvider: true,
      providerOptions: getProviderOptions(selectedNetwork),
    });
  }, [selectedNetwork]);

  useEffect(() => {
    initWeb3Modal();
  }, [initWeb3Modal]);

  return (
    <ThemeProvider>
      <>
        <CssBaseline />
        <ModalProvider>
          <AppRouter />
        </ModalProvider>
      </>
    </ThemeProvider>
  );
}
