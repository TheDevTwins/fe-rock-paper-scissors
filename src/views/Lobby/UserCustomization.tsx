import React, { useState } from 'react';

import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';

import { Avatar } from 'components';

const UserCustomization: React.FC = () => {
  const [name, setName] = useState<string>('Guest');

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
          <Avatar />
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
        <div className="playerType__option active">Player</div>
        <div className="playerType__option">Spectator</div>
      </div>
    </div>
  );
};

export default UserCustomization;
