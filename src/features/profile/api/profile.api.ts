/* eslint-disable max-len */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Feature } from '../../types';
import { HistoryData } from '../types';

export interface Category {
  id: number;
  name: string;
  image: string;
  isVisible: boolean;
  parentCategoryId?: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export interface NftResponseData {
  id: number;
  featured?: boolean;
  revealed: boolean;
  mediaType: string;
  previewMedia: string;
  price: string;
  tokenId: number;
  itemId: number;
  seller: string;
  owner: string;
  image: string;
  name: string;
  description: string;
  showInListings: boolean;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  buyer: string;
  buyDate?: Date;
  isApproved: boolean;
  likeCount: number;
  txId: string;
  priceInPropel: boolean;
  royalty?: number;
  contractAddress: string;
  chainId: string;
  fileName: string;
  currencyAddress: string;
  categories: Category[];
}

export const profileApi = createApi({
  reducerPath: Feature.profile,
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_NFT_API,
  }),
  endpoints: (builder) => ({
    getNftByAddress: builder.query<NftResponseData[], string>({
      query: (address) => `/nfts/seller/${address}`,
    }),
    getHistoryByAddress: builder.query<HistoryData, string>({
      query: (address) => `/wallets/token-histories/${address}`,
    }),
  }),
});

export const { useGetNftByAddressQuery, useGetHistoryByAddressQuery } =
  profileApi;
