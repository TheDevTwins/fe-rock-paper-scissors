import React from 'react';

type props = {
  points: number;
};

const HP: React.FC<props> = ({ points }) => {
  return (
    <div className="hp">
      <div className="hp__icon"></div>
      <div className="hp__counter">10</div>
    </div>
  );
};

export default HP;
