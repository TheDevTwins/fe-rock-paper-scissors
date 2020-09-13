import React from 'react';

type props = {
  // None are required, base style is in default classes
  hat?: string;
  face?: string;
  skin?: string;
  shirt?: string;
};

const Avatar: React.FC<props> = ({ hat, face, skin, shirt }) => {
  return (
    <div className="avatar">
      <div className="avatar__container">
        <div className={`hat ${hat}`}></div>
        <div className={`head ${skin}`}>
          <div className={`face ${face}`}></div>
        </div>
        <div className={`shirt ${shirt}`}></div>
      </div>
    </div>
  );
};

export default Avatar;
