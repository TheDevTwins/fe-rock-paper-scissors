import { Avatar } from 'components';
import React from 'react';
import { useSelector } from 'react-redux';
import { StateManager } from 'services';
import { selectors } from 'state';

import { Player } from 'state';
const UserList: React.FC = () => {
  const players = useSelector(selectors.playersList);
  const comparePlayers: (a: Player, b: Player) => number = (a, b) => {
    if (a.player_type > b.player_type) {
      return -1;
    } else if (a.player_type < b.player_type) {
      return 1;
    } else return 0;
  };
  players.sort(comparePlayers);
  console.log({ players });

  const isAdmin = useSelector(selectors.isAdmin);

  return (
    <div className="userList">
      {players.map(player => (
        <div key={player.id} className="userList__player">
          <div className="userList__avatar">
            <Avatar hat={0} skin={0} face={0} shirt={0} />
          </div>
          <div className="userList__name">{player.name}</div>
          <div
            className={`userList__type ${
              player.is_admin
                ? 'admin'
                : player.player_type
                ? 'player'
                : 'spectator'
            }`}
          ></div>
          {isAdmin && !player.is_admin && <div className="userList__kick" />}
        </div>
      ))}
    </div>
  );
};

export default UserList;
