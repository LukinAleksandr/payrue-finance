import { get, some, every } from 'lodash';
import { AsyncRequestState } from './common-types';
import { REDUCER_NAME } from './reducers/async-request-state-reducer';
import { RootState } from './store';

export function createAsyncRequestStateSelector(
  actions: string[],
  asyncRequestState: AsyncRequestState,
) {
  const iterator =
    asyncRequestState === AsyncRequestState.fulfilled ? every : some;
  return (state: RootState) =>
    iterator(actions, (action) =>
      get(state, `${REDUCER_NAME}.${action}.${asyncRequestState}`),
    );
}
