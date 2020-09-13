import {
  createSocketConnectAction,
  createSocketDisconnectAction,
} from 'services';

const sessionUrl = '/session';
const sessionDesc = 'session';
const sessionOptions = { id: true };
export const connectToSessionSocket = createSocketConnectAction(
  sessionUrl,
  sessionDesc,
  sessionOptions
);
export const disconnectFromSessionSocket = createSocketDisconnectAction(
  sessionUrl,
  sessionDesc,
  sessionOptions
);
