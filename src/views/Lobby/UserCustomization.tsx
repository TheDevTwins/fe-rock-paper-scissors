import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';
import {
  updateName,
  updateAvatar,
  updatePlayerType,
  selectors,
  Avatar as AvatarType,
} from 'state';

import { Avatar } from 'components';

import { avatarClassesLength } from '../../components/Avatar';

const UserCustomization: React.FC = () => {
  const dispatch = useDispatch();
  const player = useSelector(selectors.currentPlayer);

  const [playerType, setPlayerType] = useState(1);

  const updateAvatarVals = (propType: string, i: number) => {
    const len = avatarClassesLength[propType as keyof AvatarType];
    let newVal = player.avatar[propType as keyof AvatarType] + i;
    if (newVal === len) newVal = 0;
    if (newVal < 0) newVal = len - 1;
    dispatch(updateAvatar({ [propType]: newVal } as any));
  };

  const randomAvatarVals = () => {
    const clsLen = avatarClassesLength;
    return {
      hat: Math.floor(Math.random() * (clsLen['hat'] - 1)),
      face: Math.floor(Math.random() * (clsLen['face'] - 1)),
      skin: Math.floor(Math.random() * (clsLen['skin'] - 1)),
      shirt: Math.floor(Math.random() * (clsLen['shirt'] - 1)),
    };
  };

  return (
    <div className="userCustom">
      <div className="userCustom__group">
        <div className="carets carets--left">
          <CaretLeftOutlined onClick={() => updateAvatarVals('hat', -1)} />
          <CaretLeftOutlined onClick={() => updateAvatarVals('face', -1)} />
          <CaretLeftOutlined onClick={() => updateAvatarVals('skin', -1)} />
          <CaretLeftOutlined onClick={() => updateAvatarVals('shirt', -1)} />
        </div>

        <div className="userCustom__avatar">
          <Avatar {...player?.avatar} />
        </div>

        <div className="carets carets--right">
          <CaretRightOutlined onClick={() => updateAvatarVals('hat', 1)} />
          <CaretRightOutlined onClick={() => updateAvatarVals('face', 1)} />
          <CaretRightOutlined onClick={() => updateAvatarVals('skin', 1)} />
          <CaretRightOutlined onClick={() => updateAvatarVals('shirt', 1)} />
        </div>
      </div>
      <div
        onClick={() => dispatch(updateAvatar(randomAvatarVals()))}
        className="random"
      >
        Randomize
      </div>
      <input
        maxLength={10}
        value={player?.name || ''}
        type="text"
        placeholder="Player name"
        className="userCustom__input"
        onChange={e => dispatch(updateName({ name: e.target.value }))}
      />
      <div className="playerType">
        <div
          onClick={() => {
            if (playerType === 0 && player)
              dispatch(updatePlayerType({ player_type: 1 }));
            setPlayerType(1);
          }}
          className={`playerType__option ${playerType ? 'active' : ''}`}
        >
          Player
        </div>
        <div
          onClick={() => {
            if (playerType === 1 && player)
              dispatch(updatePlayerType({ player_type: 0 }));
            setPlayerType(0);
          }}
          className={`playerType__option ${!playerType ? 'active' : ''}`}
        >
          Spectator
        </div>
      </div>
    </div>
  );
};

export default UserCustomization;
