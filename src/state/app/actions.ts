import { appManager, AppState } from './manager';
import { addElementToIndexedArray } from 'services';
import * as types from './types';

export const createSession = appManager.createApi<
  unknown,
  types.Session,
  AppState
>('CREATE_SESSION', {
  path: '/sessions',
  method: 'POST',
  successReducer(state, result) {
    state.session = result;
  },
});

appManager.createSocketListener<types.Player, AppState>(
  'player_joined',
  (state, result) => {
    if (Object.keys(state.players).length == 0) {
      state.selfId = result.id;
    }
    addElementToIndexedArray(state.players, result);
  }
);

appManager.createSocketListener<types.Player, AppState>(
  'player_left',
  (state, result) => {
    delete state.players[result.id];
  }
);

appManager.createSocketListener<{ player_id: number; name: string }, AppState>(
  'name_updated',
  (state, result) => {
    state.players[result.player_id].name = result.name;
  }
);

export const updateName = appManager.createSocketAction<{ name: string }>(
  'update_name'
);

appManager.createSocketListener<
  { player_id: number; avatar: types.Avatar },
  AppState
>('avatar_updated', (state, result) => {
  state.players[result.player_id].avatar = result.avatar;
});

export const updateAvatar = appManager.createSocketAction<types.Avatar>(
  'update_avatar'
);
