import { SelectChangeEvent } from '@mui/material';
import { useEffect } from 'react';
import { Network, networks } from '../../features/network';
import {
  setChainId,
  setNetworkById,
  setTokens,
} from '../../features/network/slice';
import { switchNetwork } from '../../features/network/utils/switchNetwork';
import toast from '../services/notifications-service';
import { useAppDispatch, useAppSelector } from '../store';
import {
  NetworkButtonsWrapper,
  NetworkFormControl,
  NetworkMenuItem,
  NetworkSelectStyled,
  Chevron,
} from './network-select.styled';
import bsc from '../../features/network/utils/bsc.json';
import eth from '../../features/network/utils/eth.json';
import polygon from '../../features/network/utils/polygon.json';

const bscChainId = process.env.REACT_APP_BSC_CHAIN_ID || '';
const polygonChainId = process.env.REACT_APP_POLYGON_CHAIN_ID || '';
const ethChainId = process.env.REACT_APP_ETH_CHAIN_ID || '';

export default function NetworkSelect() {
  const dispatch = useAppDispatch();

  const selectedNetwork = useAppSelector((state) => state.networks.network);

  const networkChanged = (network: Network) => {
    dispatch(setNetworkById(network.value));
    dispatch(setChainId(network.chainId));
  };

  useEffect(() => {
    if (selectedNetwork) {
      switch (selectedNetwork.value) {
        case Number(ethChainId): {
          dispatch(setTokens(eth));
          break;
        }
        case Number(bscChainId): {
          dispatch(setTokens(bsc));
          break;
        }
        case Number(polygonChainId): {
          dispatch(setTokens(polygon));
          break;
        }

        default: {
          dispatch(setTokens(bsc));
        }
      }
    }
  }, [selectedNetwork, dispatch]);

  const setSelectedNetwork = (event: SelectChangeEvent<unknown>) => {
    const selectedChainId = event.target.value as string;

    const newNetwork = networks.find(
      (network) => network.chainId === selectedChainId,
    );

    if (newNetwork) {
      switchNetwork(newNetwork).then(() => {
        networkChanged(newNetwork);
        toast({
          type: 'success',
          message: `The network changed to ${
            networks.find((c) => c.chainId === selectedChainId)?.title
          }`,
        });
      });
    }
  };

  return (
    <NetworkButtonsWrapper>
      <NetworkFormControl>
        <NetworkSelectStyled
          IconComponent={Chevron}
          onChange={setSelectedNetwork}
          value={selectedNetwork?.chainId}
        >
          {networks.map((network) => {
            const Icon = network.icon;
            return (
              <NetworkMenuItem key={network.chainId} value={network.chainId}>
                <Icon sx={{ width: 22 }} />
                {network.title}
              </NetworkMenuItem>
            );
          })}
        </NetworkSelectStyled>
      </NetworkFormControl>
    </NetworkButtonsWrapper>
  );
}
