import { Auth } from './auth/types';
import { ApiStateSingle } from 'redux-state-manager';

export type StoreState = {
  auth: ApiStateSingle<Auth>;
};
