import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectors, PLAYER, PICKS, PLAYER_STATES } from 'state';

import { Player } from 'state';
import { Avatar } from 'components';

const Players: React.FC = () => {
  // const players = useSelector(selectors.playersList).filter(
  //   p => p.player_type === PLAYER
  // );

  const [players, setPlayers] = useState<Player[]>([]);

  return (
    <div className="players scroll">
      <button
        className="players__demo"
        onClick={() => {
          setPlayers([
            ...players,
            {
              id: 36,
              player_type: 1,
              name: 'tencharsww',
              state: 0,
              is_admin: 0,
              pick: 0,
              points: 10,
              avatar: { hat: 0, face: 0, skin: 0, shirt: 0 },
            },
          ]);
        }}
      >
        Add a player
      </button>
      <div className="scroll__container">
        {players.map((player, i) => (
          <div key={i} className="playerItem">
            <div className="playerItem__avatar">
              <Avatar hat={0} face={0} skin={0} shirt={0} />
            </div>
            <div className="playerItem__name">{player.name}</div>
            <div>HP</div>
            <div>Option</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Players;
