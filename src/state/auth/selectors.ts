import { StoreState } from '../storeState';

export const token = (state: StoreState) => state.auth.item.token;
export const username = (state: StoreState) => state.auth.item.username;
export const userType = (state: StoreState) => state.auth.item.userType;

export const auth = {
  waiting: (state: StoreState) => state.auth.waiting,
  error: (state: StoreState) => state.auth.error,
};
