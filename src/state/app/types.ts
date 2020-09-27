export type Session = {
  id: number;
  status: number;
  timer: number;
};

export type Avatar = {
  hat: number;
  face: number;
  skin: number;
  shirt: number;
};

export type Player = {
  id: number;
  name: string;
  player_type: number;
  is_admin: number;
  avatar: Avatar;
  pick: number | boolean;
  points: number;
  state: number;
};

export type Message = {
  player_id: number;
  message: string;
};
