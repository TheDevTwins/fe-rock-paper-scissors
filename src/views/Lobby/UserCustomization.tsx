import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';

import { Avatar } from 'components';

import { updateName, selectors } from 'state';

const UserCustomization: React.FC = () => {
  const dispatch = useDispatch();
  const player = useSelector(selectors.currentPlayer);

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
        value={player?.name}
        type="text"
        placeholder="Player name"
        className="userCustom__input"
        onChange={e => dispatch(updateName({ name: e.target.value }))}
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
