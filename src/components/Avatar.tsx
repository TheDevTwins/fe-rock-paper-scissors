import React from 'react';

import { Avatar as AvatarType } from 'state';

const hats = [
  'white',
  'yellow',
  'orange',
  'red',
  'purple',
  'blue',
  'green',
  'grey',
];
const skinColors = ['skin1', 'skin2', 'skin3', 'skin4', 'skin5'];
const faces = ['meh'];
const shirtColors = [
  'orange',
  'red',
  'purple',
  'blue',
  'green',
  'grey',
  'white',
  'yellow',
];

const Avatar: React.FC<AvatarType> = ({
  hat = 0,
  face = 0,
  skin = 0,
  shirt = 0,
}) => {
  return (
    <div className="avatar">
      <div className="avatar__container">
        <div className={`hat ${hats[hat]}`}></div>
        <div className={`head ${skinColors[skin]}`}>
          <div className={`face ${faces[face]}`}>
            <div className="eyebrows"></div>
            <div className="eyes"></div>
            <div className="mouth"></div>
          </div>
        </div>
        <div className={`shirt ${shirtColors[shirt]}`}></div>
      </div>
    </div>
  );
};

export default Avatar;
