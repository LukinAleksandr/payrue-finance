import { Network } from './networks';

export interface SwitchError {
  code: number;
}

export const switchNetwork = (network: Network) =>
  new Promise((resolve, reject) => {
    if (window?.ethereum && network) {
      window.ethereum
        .request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: network.chainId }],
        })
        .then(resolve)
        .catch((switchError: SwitchError) => {
          if (switchError.code === 4902) {
            window.ethereum
              .request({
                method: 'wallet_addEthereumChain',
                params: [
                  {
                    chainId: network.chainId,
                    chainName: network.chainName,
                    nativeCurrency: network.nativeCurrency,
                    rpcUrls: network.rpcUrls,
                    blockExplorerUrls: network.blockExplorerUrls,
                  },
                ],
              })
              .then(resolve)
              .catch(reject);
          } else {
            reject();
          }
        });
    }
    resolve(null);
  });
