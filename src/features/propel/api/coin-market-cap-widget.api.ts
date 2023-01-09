/* eslint-disable max-len */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AxiosResponse } from 'axios';
import { Feature } from '../../types';

export interface N4043 {
  id: number;
  name: string;
  symbol: string;
  slug: string;
  num_market_pairs: number;
  date_added: string;
  tags: string[];
  max_supply: number;
  circulating_supply: number;
  total_supply: number;
  platform: Platform;
  is_active: number;
  cmc_rank: number;
  is_fiat: number;
  last_updated: string;
  quote: Quote;
}

export interface Platform {
  id: number;
  name: string;
  symbol: string;
  slug: string;
  token_address: string;
}

export interface Quote {
  '1': N1;
  '2781': N2781;
}

export interface N1 {
  price: number;
  volume_24h: number;
  percent_change_1h: number;
  percent_change_24h: number;
  percent_change_7d: number;
  market_cap: number;
  last_updated: string;
}

export interface N2781 {
  price: number;
  volume_24h: number;
  percent_change_1h: number;
  percent_change_24h: number;
  percent_change_7d: number;
  market_cap: number;
  last_updated: string;
}

export const coinMarketCapApi = createApi({
  reducerPath: Feature.coinmarketcap,
  baseQuery: fetchBaseQuery(),
  endpoints: (builder) => ({
    getCMCPayrueWidget: builder.query<N4043, void>({
      query: () =>
        `https://3rdparty-apis.coinmarketcap.com/v1/cryptocurrency/widget?id=4043&convert_id=1,2781`,
      transformResponse: (response: AxiosResponse) =>
        response.data[Object.keys(response.data)[0]],
    }),
  }),
});

export const { useGetCMCPayrueWidgetQuery } = coinMarketCapApi;
