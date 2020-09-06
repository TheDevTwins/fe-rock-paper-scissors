export * from './auth/actions';
export * from './sockets/connectActions';

export * from './auth/types';

import * as auth from './auth/selectors';

export const selectors = { ...auth };
