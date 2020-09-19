import React from 'react';
import { useSelector } from 'react-redux';

import { Avatar as AvatarType } from 'state';

const avatarClasses = {
  hats: ['white', 'yellow', 'orange', 'red', 'purple', 'blue', 'green', 'grey'],
  skinColors: ['skin1', 'skin2', 'skin3', 'skin4', 'skin5'],
  faces: ['meh', 'happy'],
  shirtColors: [
    'orange',
    'red',
    'purple',
    'blue',
    'green',
    'grey',
    'white',
    'yellow',
  ],
};

export const avatarClassesLength = {
  hat: avatarClasses.hats.length,
  skin: avatarClasses.skinColors.length,
  face: avatarClasses.faces.length,
  shirt: avatarClasses.shirtColors.length,
};

const Avatar: React.FC<AvatarType> = ({
  hat = 0,
  face = 0,
  skin = 0,
  shirt = 0,
}) => {
  return (
    <div className="avatar">
      <div className="avatar__container">
        <div className={`hat ${avatarClasses.hats[hat]}`}></div>
        <div className={`head ${avatarClasses.skinColors[skin]}`}>
          <div className={`face ${avatarClasses.faces[face]}`}>
            <div className="eyebrows"></div>
            <div className="eyes"></div>
            <div className="mouth"></div>
          </div>
        </div>
        <div className={`shirt ${avatarClasses.shirtColors[shirt]}`}></div>
      </div>
    </div>
  );
};

export default Avatar;
