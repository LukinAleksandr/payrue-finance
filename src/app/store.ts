import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { coinMarketCapApi } from '../features/propel';
import { coinGeckoApi } from '../features/coin-gecko';
import { profileApi } from '../features/profile';
import { oneInchApi } from '../features/one-inch';
import services from './services';
import { rootReducer } from './reducers';

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      thunk: { extraArgument: services },
    })
      .concat(coinGeckoApi.middleware)
      .concat(coinMarketCapApi.middleware)
      .concat(oneInchApi.middleware)
      .concat(profileApi.middleware),
});

setupListeners(store.dispatch);
