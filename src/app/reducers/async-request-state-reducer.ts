import { AnyAction } from '@reduxjs/toolkit';
import slice from 'lodash/fp/slice';
import split from 'lodash/fp/split';
import join from 'lodash/fp/join';
import flow from 'lodash/flow';
import { AsyncRequestState } from '../common-types';
import { resetAsyncRequestState } from '../actions';

export const REDUCER_NAME = 'asyncRequestState';
const SEPARATOR = '/';

export default function asyncRequestStateReducer(
  state: Record<string, boolean>,
  { type, payload, meta }: AnyAction,
) {
  const typePrefix = flow(
    split(SEPARATOR),
    slice(0, -1),
    join(SEPARATOR),
  )(type);

  // Reset item in state using action
  if (type === resetAsyncRequestState.type && state[payload]) {
    return {
      ...state,
      [payload]: {
        [AsyncRequestState.pending]: false,
        [AsyncRequestState.rejected]: false,
        [AsyncRequestState.fulfilled]: false,
      },
    };
  }

  // Skip all sync actions
  if (!typePrefix || !meta) {
    return {
      ...state,
    };
  }

  return {
    ...state,
    [typePrefix]: {
      [AsyncRequestState.pending]:
        meta.requestStatus === AsyncRequestState.pending,
      [AsyncRequestState.rejected]:
        meta.requestStatus === AsyncRequestState.rejected,
      [AsyncRequestState.fulfilled]:
        meta.requestStatus === AsyncRequestState.fulfilled,
    },
  };
}
