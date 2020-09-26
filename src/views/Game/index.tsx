import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Players from './Players';
import Picks from './Picks';

const Game: React.FC = () => {
  return (
    <div>
      Game
      <Players />
      <Picks />
    </div>
  );
};

export default Game;
