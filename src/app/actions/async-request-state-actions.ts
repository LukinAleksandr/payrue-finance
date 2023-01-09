import { createAction } from '@reduxjs/toolkit';
import { CommonFeatures, AsyncRequestStateActions } from '../common-types';
import { getActionTypePrefix } from '../utils';

export const resetAsyncRequestState = createAction<string>(
  getActionTypePrefix(CommonFeatures.app, AsyncRequestStateActions.RESET),
);
