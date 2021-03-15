import React from 'react';
import { useSelector } from 'react-redux';

import { selectors, Player } from 'state';
import { Avatar } from 'components';
import { CrownOutlined } from '@ant-design/icons';

const UserList: React.FC = () => {
  const players = useSelector(selectors.playersList);
  const comparePlayers: (a: Player, b: Player) => number = (a, b) => {
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
  };

  players.sort(comparePlayers);

  const isAdmin = useSelector(selectors.isAdmin);

  return (
    <div className="userList scroll">
      <div className="userList__container scroll__container">
        {players.map(player => (
          <div
            key={player.id}
            className={`userList__player ${isAdmin ? 'admin' : ''}`}
          >
            <div className="userList__avatar">
              <Avatar {...player.avatar} />
            </div>
            <div className="userList__name">
              {player.name}
              {player.is_admin ? <CrownOutlined className="crown" /> : ''}
            </div>
            <div
              className={`userList__type ${
                player.player_type ? 'spectator' : 'player'
              }`}
            />
            {isAdmin && !player.is_admin && <div className="userList__kick" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
