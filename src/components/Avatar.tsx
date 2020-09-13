import React from 'react';

import { Avatar as AvatarType } from 'state';

const hats = [''];
const skinColors = [''];
const faces = [''];
const shirtColors = [''];

const Avatar: React.FC<AvatarType> = ({ hat, face, skin, shirt }) => {
  return (
    <div className="avatar">
      <div className="avatar__container">
        <div className={`hat ${hats[hat]}`}></div>
        <div className={`head ${skinColors[skin]}`}>
          <div className={`face ${faces[face]}`}></div>
        </div>
        <div className={`shirt ${shirtColors[shirt]}`}></div>
      </div>
    </div>
  );
};

export default Avatar;
