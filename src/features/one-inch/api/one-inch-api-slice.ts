import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Feature } from '../../types';

export interface ResponseToken {
  address: string;
  decimals: number;
  logoURI: string;
  name: string;
  symbol: string;
  tags: string[];
}

export type TokenData = Record<string, ResponseToken>;

type ResponseType = {
  tokens: TokenData;
};

export const oneInchApi = createApi({
  reducerPath: Feature.oneinch,
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.1inch.exchange/v3.0' }),
  endpoints: (builder) => ({
    fetchOneInchTokens: builder.query<TokenData, number>({
      query: (networkId = 1) => `/${networkId}/tokens`,
      transformResponse: (response: ResponseType) => response.tokens,
    }),
  }),
});

export const { useFetchOneInchTokensQuery } = oneInchApi;
