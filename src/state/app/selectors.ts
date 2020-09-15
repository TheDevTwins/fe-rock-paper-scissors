import { StoreState } from '../storeState';

export const session = (state: StoreState) => state.app.session;

export const playersList = (state: StoreState) =>
  Object.values(state.app.players);

export const players = (state: StoreState) => state.app.players;

export const currentPlayer = (state: StoreState) => {
  return state.app.players[state.app.selfId];
};

export const isAdmin = (state: StoreState) => {
  return currentPlayer(state)?.is_admin;
};

export const localMessages = (state: StoreState) => {
  return state.app.messages;
};
