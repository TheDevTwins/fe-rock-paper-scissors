import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectors,
  PLAYER,
  PICKS,
  ICONS,
  PLAYER_STATES,
  SPECTATOR,
  Player,
} from 'state';
import None from 'assets/images/none.png';
import { Avatar, HP } from 'components';

const Players: React.FC = () => {
  const playerList = useSelector(selectors.playersList).sort((a, b) => {
    const [type1, type2] = [a.player_type, b.player_type];
    const [name1, name2] = [a.name, b.name];

    return type1 === type2
      ? name1 === name2
        ? 0
        : name1 < name2
        ? -1
        : 1
      : type1 < type2
      ? -1
      : 1;
  });

  const picks_revealed = useSelector(selectors.picks_revealed);

  // const [players, setPlayers] = useState<Player[]>([]);

  // useEffect(() => {
  //   const mockPlayer = {
  //     id: 36,
  //     player_type: 0,
  //     name: 'Player Name',
  //     state: 0,
  //     is_admin: 0,
  //     pick: 0,
  //     points: 10,
  //     avatar: { hat: 0, face: 0, skin: 0, shirt: 0 },
  //   };
  //   const newArray = [];
  //   for (let i = 0; i < 20; i++) {
  //     newArray.push(mockPlayer);
  //   }
  //   setPlayers(newArray);
  // }, []);

  return (
    <div className="players scroll">
      <div className="scroll__container">
        {playerList.map((player, i) => (
          <div key={i} className="playerLI">
            <div className="playerLI__avatar">
              <Avatar {...player.avatar} />
            </div>
            <div className="playerLI__name">{player.name}</div>
            {player.player_type === SPECTATOR ? null : (
              <>
                <HP points={player.points} />
                <img
                  className="playerLI__pick"
                  src={
                    picks_revealed && typeof player.pick === 'number'
                      ? (ICONS as any)[player.pick]
                      : None
                  }
                  alt="pick"
                />
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Players;
