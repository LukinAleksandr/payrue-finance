import Web3 from 'web3';
import WalletConnectProvider from '@walletconnect/web3-provider';
import WalletLink from 'walletlink';
import * as UAuthWeb3Modal from '@uauth/web3modal';
import UAuthSPA from '@uauth/js';
import supportedChains from './chains';

export const uauthOptions = {
  clientID: process.env.REACT_APP_UD_CLIENT_ID,
  redirectUri: process.env.REACT_APP_UD_REDIRECT_URI,

  // Must include both the openid and wallet scopes.
  scope: 'openid wallet',
};

// eslint-disable-next-line
export function initWeb3(provider: any) {
  // eslint-disable-next-line
  const web3: any = new Web3(provider);

  web3.eth.extend({
    methods: [
      {
        name: 'chainId',
        call: 'eth_chainId',
        outputFormatter: web3.utils.hexToNumber,
      },
    ],
  });

  return web3;
}

export const getProviderOptions = (chainId: number) => {
  const item = supportedChains.find((c) => c.chain_id === chainId);
  if (item) {
    return {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          // infuraId: '3f36b115f811431ba0bc3ed93fc3f03d',
          rpc: {
            [chainId]: item.rpc_url,
          },
          network: item.network,
          chainId: item.chain_id,
        },
      },
      walletlink: {
        package: WalletLink,
        options: {
          appName: 'Payrue Nft App', // Required
          // infuraId: '6a38e41498d1463fa6606ca8b2772f6d',
          rpc: {
            [chainId]: item.rpc_url,
          },
          chainId: item.chain_id,
          appLogoUrl: null,
          darkMode: true,
        },
      },
      'custom-uauth': {
        // The UI Assets
        display: UAuthWeb3Modal.display,

        // The Connector
        connector: UAuthWeb3Modal.connector,

        // The SPA libary
        package: UAuthSPA,

        // The SPA libary options
        options: uauthOptions,
      },
    };
  }

  return undefined;
};
