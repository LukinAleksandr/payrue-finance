import services from './services';
import { RootState, AppDispatch } from './store';

export type ThunkExtraArgument = typeof services;

export interface ThunkApi {
  state: RootState;
  dispatch: AppDispatch;
  extra: ThunkExtraArgument;
}

export type Nullable<T> = T | null;

export enum AsyncRequestState {
  pending = 'pending',
  rejected = 'rejected',
  fulfilled = 'fulfilled',
}

export enum AsyncRequestStateActions {
  RESET = 'resetAsyncRequestState',
}

export enum CommonFeatures {
  app = '@@app',
}

export interface LocationParams<LocationState = unknown> {
  pathname: string;
  state: LocationState;
  search: string;
  hash: string;
  key: string;
}

export enum LocalStorageData {
  THEME_STORAGE = 'theme_storage',
}
