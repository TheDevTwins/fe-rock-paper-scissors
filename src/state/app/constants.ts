// PENDING, PLAYING, FINISHED = list(range(3))
export const PENDING = 0;
export const PLAYING = 1;
export const FINISHED = 2;

export const STATUSES = {
  [PENDING]: 'pending',
  [PLAYING]: 'playing',
  [FINISHED]: 'finished',
};

export const PLAYER = 1;
export const SPECTATOR = 0;

export const ROCK = 0;
export const PAPER = 1;
export const SCISSORS = 2;

export const PICKS = {
  [ROCK]: 'rock',
  [PAPER]: 'paper',
  [SCISSORS]: 'scissors',
};

export const IN_GAME = 0;
export const LOST = 1;
export const WON = 2;

export const PLAYER_STATES = {
  [IN_GAME]: 'in game',
  [LOST]: 'lost',
  [WON]: 'won',
};
