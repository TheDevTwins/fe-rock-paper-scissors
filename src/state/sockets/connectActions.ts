import {
  createSocketConnectAction,
  createSocketDisconnectAction,
} from 'redux-state-manager';

const klassUrl = '/klass/';
const klassDesc = 'klass';
export const connectToKlassSocket = createSocketConnectAction(
  klassUrl,
  klassDesc
);
export const disconnectFromKlassSocket = createSocketDisconnectAction(
  klassUrl,
  klassDesc
);

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
