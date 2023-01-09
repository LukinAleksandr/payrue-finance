import { AnyAction } from '@reduxjs/toolkit';
import appReducer from './app-reducer';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const rootReducer = (state: any, action: AnyAction) =>
  appReducer(state, action);

export default rootReducer;
