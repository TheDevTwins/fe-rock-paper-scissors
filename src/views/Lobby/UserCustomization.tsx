import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';
import {
  Avatar as AvatarType,
  PLAYER,
  selectors,
  SPECTATOR,
  updateAvatar,
  updateName,
  updatePlayerType,
} from 'state';

import { Avatar } from 'components';

import { avatarClassesLength } from '../../components/Avatar';

const UserCustomization: React.FC = () => {
  const dispatch = useDispatch();
  const player = useSelector(selectors.currentPlayer);

  const updateAvatarVals = (propType: string, i: number) => {
    const len = avatarClassesLength[propType as keyof AvatarType];
    let newVal = player.avatar[propType as keyof AvatarType] + i;
    if (newVal === len) newVal = 0;
    if (newVal < 0) newVal = len - 1;
    dispatch(updateAvatar({ [propType]: newVal } as any));
  };

  const randomAvatarVals = () => {
    const vals = {
      hat: Math.floor(Math.random() * avatarClassesLength['hat']),
      skin: Math.floor(Math.random() * avatarClassesLength['skin']),
      face: Math.floor(Math.random() * avatarClassesLength['face']),
      shirt: Math.floor(Math.random() * avatarClassesLength['shirt']),
    };
    return vals;
  };

  if (!player) return null;

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
            if (player.player_type === SPECTATOR)
              dispatch(updatePlayerType({ player_type: PLAYER }));
          }}
          className={`playerType__option ${
            player.player_type === PLAYER ? 'active' : ''
          }`}
        >
          Player
        </div>
        <div
          onClick={() => {
            if (player.player_type === PLAYER)
              dispatch(updatePlayerType({ player_type: SPECTATOR }));
          }}
          className={`playerType__option ${
            player.player_type === SPECTATOR ? 'active' : ''
          }`}
        >
          Spectator
        </div>
      </div>
    </div>
  );
};

export default UserCustomization;
