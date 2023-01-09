import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PricesData } from '../../profile/types';
import { Feature } from '../../types';
import { CoinGeckoBySymbolResponse } from '../types';

export interface BalanceTo {
  [key: string]: number;
}

export interface Coin {
  id: string;
  symbol: string;
  name: string;
}

interface FetchPricePayload {
  id: string;
  vsCurrency: string[];
}

interface FetchPriceResponse {
  [key: string]: BalanceTo;
}

interface ChartData {
  prices: [number, number][];
}

export const coinGeckoApi = createApi({
  reducerPath: Feature.coingecko,
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.coingecko.com/api/v3' }),
  endpoints: (builder) => ({
    fetchCoinsList: builder.query<Coin[], void>({
      query: () => `/coins/list`,
    }),
    getGeckoCoinBySymbol: builder.query<CoinGeckoBySymbolResponse, string>({
      query: (symbol = 'payrue') =>
        `/coins/${symbol}?developer_data=false&community_data=false&tickers=false`,
    }),
    fetchChartData: builder.query<ChartData, string>({
      query: (id) => `/coins/${id}/market_chart?vs_currency=usd&days=365`,
    }),
    getPrices: builder.query<PricesData, string>({
      query: (currencies: string) =>
        `/simple/price?ids=${currencies}&vs_currencies=usd`,
    }),
    fetchEtherPrice: builder.query<BalanceTo, void>({
      query: () => `/simple/price?ids=ethereum&vs_currencies=usd`,
      transformResponse: (response: FetchPriceResponse) =>
        response[Object.keys(response)[0]],
    }),
    fetchPayPrice: builder.query<BalanceTo, FetchPricePayload>({
      query: ({ id, vsCurrency = [] }) =>
        `/simple/price?ids=${id.toLocaleLowerCase()}&vs_currencies=${[
          ...vsCurrency,
          'usd',
        ]
          .filter(Boolean)
          .map((currency) => currency.toLowerCase())
          .join(',')}`,
      transformResponse: (response: FetchPriceResponse) =>
        response[Object.keys(response)[0]],
    }),
    fetchReceivePrice: builder.query<BalanceTo, FetchPricePayload>({
      query: ({ id, vsCurrency = [] }) =>
        `/simple/price?ids=${id.toLocaleLowerCase()}&vs_currencies=${[
          ...vsCurrency,
          'usd',
        ]
          .filter(Boolean)
          .map((currency) => currency.toLowerCase())
          .join(',')}`,
      transformResponse: (response: FetchPriceResponse) =>
        response[Object.keys(response)[0]],
    }),
  }),
});

export const {
  useFetchCoinsListQuery,
  useGetGeckoCoinBySymbolQuery,
  useGetPricesQuery,
  useFetchEtherPriceQuery,
  useFetchPayPriceQuery,
  useFetchChartDataQuery,
  useFetchReceivePriceQuery,
} = coinGeckoApi;
