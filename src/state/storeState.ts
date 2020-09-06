import { Auth } from './auth/types';
import { ApiStateSingle } from 'services';

export type StoreState = {
  auth: ApiStateSingle<Auth>;
};
