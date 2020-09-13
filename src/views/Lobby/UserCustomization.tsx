import React, { useState } from 'react';

import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';

import { Avatar } from 'components';

const UserCustomization: React.FC = () => {
  const [name, setName] = useState<string>('Guest');

  const [playerType, setPlayerType] = useState<number>(0);

  return (
    <div className="userCustom">
      <div className="userCustom__group">
        <div className="carets carets--left">
          <CaretLeftOutlined />
          <CaretLeftOutlined />
          <CaretLeftOutlined />
          <CaretLeftOutlined />
        </div>

        <div className="userCustom__avatar">
          <Avatar hat={0} skin={0} face={0} shirt={0} />
        </div>

        <div className="carets carets--right">
          <CaretRightOutlined />
          <CaretRightOutlined />
          <CaretRightOutlined />
          <CaretRightOutlined />
        </div>
      </div>
      <div className="random">Randomize</div>
      <input
        type="text"
        placeholder="Player name"
        className="userCustom__input"
        onChange={e => setName(e.target.value)}
      />
      <div className="playerType">
        <div
          onClick={() => setPlayerType(0)}
          className={`playerType__option ${!playerType ? 'active' : ''}`}
        >
          Player
        </div>
        <div
          onClick={() => setPlayerType(1)}
          className={`playerType__option ${playerType ? 'active' : ''}`}
        >
          Spectator
        </div>
      </div>
    </div>
  );
};

export default UserCustomization;
