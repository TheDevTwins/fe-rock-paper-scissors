import { GlobalManager } from 'services';

import { authManager } from './auth/actions';

import { SOCKET_URL } from 'settings';

export const globalManager = new GlobalManager({
  socketUrl: SOCKET_URL,
  managers: [authManager],
});
