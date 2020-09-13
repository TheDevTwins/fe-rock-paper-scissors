import { StateManager, ApiStateSingle } from 'services';

import { API_URL } from 'settings';

import * as types from './types';

export type AppState = { session: types.Session };

export const appManager = new StateManager({
  moduleName: 'app',
  apiUrl: API_URL,
  initialState: {},
});
