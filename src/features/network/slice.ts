import { createSlice } from '@reduxjs/toolkit';
import { ethers } from 'ethers';
import Web3 from 'web3';
import Web3Modal from 'web3modal';
import { Network, ERC20BridgeSource, getNetworkById } from './utils/networks';
import bsc from './utils/bsc.json';

import { Feature } from '../types';
import { chainIdToHex } from '../../app/utils/chains';

export interface Web3Provider extends ethers.providers.Web3Provider {
  disconnect: () => void;
}

export interface Token {
  icon: string;
  tags: string[];
  address: string;
  decimals: number;
  label: string;
  value: string;
}

export interface NetworkState {
  web3: Web3 | null;
  address: string | null;
  web3Modal: Web3Modal | null;
  provider: Web3Provider | null;
  networkId: number;
  chainId: string;
  slippagePercentage: number;
  gasFee: string;
  liquidity: { [key: string]: boolean };
  network: Network | null;
  tokens: Token[];
  loading: boolean;
}

const bscChainId = process.env.REACT_APP_BSC_CHAIN_ID || '';
const polygonChainId = process.env.REACT_APP_POLYGON_CHAIN_ID || '';
const ethChainId = process.env.REACT_APP_ETH_CHAIN_ID || '';

const initialState: NetworkState = {
  web3: null,
  address: null,
  web3Modal: null,
  provider: null,
  networkId: Number(bscChainId),
  chainId: chainIdToHex(Number(bscChainId)),
  slippagePercentage: 0.005,
  gasFee: '0',
  liquidity: {},
  network: getNetworkById(Number(bscChainId)) || null,
  tokens: bsc as Token[],
  loading: true,
};

const networkSlice = createSlice({
  name: Feature.network,
  initialState,
  reducers: {
    setWeb3: (state, { payload }) => {
      state.web3 = payload;
    },
    setAddress: (state, { payload }) => {
      state.address = payload;
    },
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
    setWeb3Modal: (state, { payload }) => {
      state.web3Modal = payload;
    },
    setProvider: (state, { payload }) => {
      state.provider = payload;
    },
    setNetworkById: (state, { payload }) => {
      state.networkId = payload;
      const n = getNetworkById(payload);
      if (n) {
        state.network = n;
        switch (n.value) {
          case Number(ethChainId):
            state.liquidity = {
              ...Object.keys(ERC20BridgeSource.all).reduce(
                (a, v) => ({ ...a, [v]: v }),
                {},
              ),
            };
            break;
          case Number(bscChainId):
            state.liquidity = {
              ...Object.keys(ERC20BridgeSource.all).reduce(
                (a, v) => ({ ...a, [v]: v }),
                {},
              ),
              ...Object.keys(ERC20BridgeSource.bsc).reduce(
                (a, v) => ({ ...a, [v]: v }),
                {},
              ),
            };
            break;
          case Number(polygonChainId):
            state.liquidity = {
              ...Object.keys(ERC20BridgeSource.all).reduce(
                (a, v) => ({ ...a, [v]: v }),
                {},
              ),
              ...Object.keys(ERC20BridgeSource.polygon).reduce(
                (a, v) => ({ ...a, [v]: v }),
                {},
              ),
            };
            break;
          default:
            state.liquidity = {};
        }
      }
    },
    setTokens: (state, { payload }) => {
      state.tokens = payload;
    },
    addToken: (state, { payload }) => {
      state.tokens = [...state.tokens, payload];
    },
    setChainId: (state, { payload }) => {
      state.chainId = payload;
    },
    setSlippagePercentage: (state, { payload }) => {
      state.slippagePercentage = payload;
    },
    setGasFee: (state, { payload }) => {
      state.gasFee = payload;
    },
    setLiquidity: (state, { payload }) => {
      state.liquidity = payload;
    },
  },
});

export const {
  setAddress,
  setChainId,
  setGasFee,
  setLiquidity,
  setNetworkById,
  setTokens,
  addToken,
  setProvider,
  setSlippagePercentage,
  setWeb3Modal,
  setWeb3,
  setLoading,
} = networkSlice.actions;

export default networkSlice.reducer;
