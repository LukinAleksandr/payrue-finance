import { combineReducers } from '@reduxjs/toolkit';
import { coinMarketCapApi } from '../../features/propel';
import { coinGeckoApi } from '../../features/coin-gecko';
import networks from '../../features/network/slice';
import { oneInchApi } from '../../features/one-inch';
import { profileApi } from '../../features/profile';
import profile from '../../features/profile/slice';

import asyncRequestStateReducer, {
  REDUCER_NAME as ASYNC_REQUEST_STATE_REDUCER_NAME,
} from './async-request-state-reducer';

const appReducer = combineReducers({
  networks,
  profile,
  [coinGeckoApi.reducerPath]: coinGeckoApi.reducer,
  [coinMarketCapApi.reducerPath]: coinMarketCapApi.reducer,
  [oneInchApi.reducerPath]: oneInchApi.reducer,
  [profileApi.reducerPath]: profileApi.reducer,
  [ASYNC_REQUEST_STATE_REDUCER_NAME]: asyncRequestStateReducer,
});

export default appReducer;
