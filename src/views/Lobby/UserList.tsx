import React from 'react';
import { useSelector } from 'react-redux';

import { selectors, Player } from 'state';
import { Avatar } from 'components';
import { CrownOutlined } from '@ant-design/icons';

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

  const isAdmin = useSelector(selectors.isAdmin);

  return (
    <div className="userList">
      {players.map(player => (
        <div key={player.id} className="userList__player">
          <div className="userList__avatar">
            <Avatar {...player.avatar} />
          </div>
          <div className="userList__name">
            {player.name}
            {player.is_admin ? <CrownOutlined className="crown" /> : ''}
          </div>
          <div
            className={`userList__type ${
              player.player_type ? 'player' : 'spectator'
            }`}
          ></div>
          {isAdmin && !player.is_admin && <div className="userList__kick" />}
        </div>
      ))}
    </div>
  );
};

export default UserList;
