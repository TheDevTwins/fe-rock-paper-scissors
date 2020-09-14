export type Session = {
  id: number;
  status: number;
};

export type Player = {
  id: number;
  name: string;
  player_type: number;
  is_admin: number;
};

export type Avatar = {
  hat: number;
  face: number;
  skin: number;
  shirt: number;
};
