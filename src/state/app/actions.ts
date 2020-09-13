import { appManager, AppState } from './manager';

import * as types from './types';

export const createSession = appManager.createApi<
  unknown,
  types.Session,
  AppState
>('CREATE_SESSION', {
  path: '/sessions',
  method: 'POST',
  successReducer(state, result) {
    state.session = result;
  },
});
