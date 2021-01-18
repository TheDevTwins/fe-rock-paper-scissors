import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectors, PLAYER, PICKS, PLAYER_STATES } from 'state';

import ROCK from 'assets/images/rock.png';
import PAPAER from 'assets/images/paper.png';
import SCISSORS from 'assets/images/scissors.png';

import { Player } from 'state';
import { Avatar, HP } from 'components';

const Players: React.FC = () => {
  // const players = useSelector(selectors.playersList).filter(
  //   p => p.player_type === PLAYER
  // );

  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    const mockPlayer = {
      id: 36,
      player_type: 0,
      name: 'Player Name',
      state: 0,
      is_admin: 0,
      pick: 0,
      points: 10,
      avatar: { hat: 0, face: 0, skin: 0, shirt: 0 },
    };
    const newArray = [];
    for (let i = 0; i < 20; i++) {
      newArray.push(mockPlayer);
    }
    setPlayers(newArray);
  }, []);

  return (
    <div className="players scroll">
      <div className="scroll__container">
        {players.map((player, i) => (
          <div key={i} className="playerLI">
            <div className="playerLI__avatar">
              <Avatar {...player.avatar} />
            </div>
            <div className="playerLI__name">{player.name}</div>
            <HP points={10} />
            <img className="playerLI__pick" src={SCISSORS} alt="pick" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Players;
