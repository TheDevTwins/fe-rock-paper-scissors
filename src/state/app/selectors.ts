import { StoreState } from '../storeState';

export const session = (state: StoreState) => state.app.session;

export const playersList = (state: StoreState) =>
  Object.values(state.app.players);
