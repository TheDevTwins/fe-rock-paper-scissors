import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Players from './Players';

const Game: React.FC = () => {
  return (
    <div>
      Game
      <Players />
    </div>
  );
};

export default Game;
