import { appManager, AppState } from './manager';
import { addElementToIndexedArray, IndexedArray } from 'services';
import * as types from './types';
import { PLAYING } from './constants';

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

export const retrieveSession = appManager.createApi<
  { id: number },
  { session: types.Session; players: types.Player[] },
  AppState
>('RETRIEVE_SESSION', {
  path: '/sessions/:id',
  method: 'GET',
  successReducer(state, result) {
    result.players.forEach(player => {
      state.players[player.id] = player;
      state.session = result.session;
    });
  },
});

appManager.createSocketListener<types.Player, AppState>(
  'player_joined',
  (state, result) => {
    if (!state.selfId) {
      state.selfId = result.id;
    }
    addElementToIndexedArray(state.players, result);
  }
);

appManager.createSocketListener<types.Player, AppState>(
  'player_left',
  (state, result) => {
    // remove admin rights from offline players
    state.offline.players[result.id] = {
      ...state.players[result.id],
      is_admin: 0,
    };
    delete state.players[result.id];
  }
);

appManager.createSocketListener<{ player_id: number }, AppState>(
  'admin_updated',
  (state, result) => {
    state.players[result.player_id].is_admin = 1;
  }
);

appManager.createSocketListener<{ player_id: number; name: string }, AppState>(
  'name_updated',
  (state, result) => {
    const player = state.players[result.player_id];
    if (player) player.name = result.name;
  }
);

export const updateName = appManager.createSocketAction<{ name: string }>(
  'update_name'
);

appManager.createSocketListener<
  { player_id: number; avatar: types.Avatar },
  AppState
>('avatar_updated', (state, result) => {
  const player = state.players[result.player_id];
  if (player) player.avatar = result.avatar;
});

export const updateAvatar = appManager.createSocketAction<types.Avatar>(
  'update_avatar'
);

appManager.createSocketListener<
  { player_id: number; player_type: number },
  AppState
>('player_type_updated', (state, result) => {
  const player = state.players[result.player_id];
  if (player) player.player_type = result.player_type;
});

export const updatePlayerType = appManager.createSocketAction<{
  player_type: number;
}>('update_player_type');

appManager.createSocketListener<types.Message, AppState>(
  'message_received',
  (state, result) => {
    state.messages.push(result);
  }
);

export const sendMessage = appManager.createSocketAction<{ message: string }>(
  'send_message'
);

export const startGame = appManager.createSocketAction('start_game');
appManager.createSocketListener<unknown, AppState>(
  'game_started',
  (state, result) => {
    if (state.session) state.session.status = PLAYING;
  }
);

appManager.createSocketListener<null, AppState>(
  'started_playing',
  (state, result) => {
    state.received_picks = false;
    Object.values(state.players).forEach(player => {
      player.pick = false;
    });
  }
);

appManager.createSocketListener<null, AppState>(
  'started_waiting',
  (state, result) => {
    state.received_picks = true;
  }
);

export const makePick = appManager.createSocketAction<{ pick: number }>(
  'make_pick'
);
appManager.createSocketListener<{ player_id: number }, AppState>(
  'player_picked',
  (state, result) => {
    state.players[result.player_id].pick = true;
  }
);

appManager.createSocketListener<
  ({ player_id: number } & types.Player)[],
  AppState
>('picks_revealed', (state, result) => {
  result.forEach(item => {
    state.players[item.player_id] = {
      ...state.players[item.player_id],
      ...item,
    };
  });
});

appManager.createSocketListener<{ value: number }, AppState>(
  'timer_updated',
  (state, result) => {
    state.session.timer = result.value;
  }
);
