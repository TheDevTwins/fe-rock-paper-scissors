import { GlobalManager } from 'services';

import { appManager } from './app/manager';

import { SOCKET_URL } from 'settings';

export const globalManager = new GlobalManager({
  socketUrl: SOCKET_URL,
  managers: [appManager],
});
