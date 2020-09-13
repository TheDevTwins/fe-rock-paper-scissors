import { StateManager, IndexedArray } from 'services';

import { API_URL, SOCKET_URL } from 'settings';

import * as types from './types';

export type AppState = {
  session: types.Session;
  selfId: number;
  players: IndexedArray<types.Player>;
};

export const appManager = new StateManager({
  moduleName: 'app',
  apiUrl: API_URL,
  socketUrl: SOCKET_URL,
  initialState: {
    players: {},
  },
});
