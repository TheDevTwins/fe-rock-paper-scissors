import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Players from './Players';
import Picks from './Picks';
import Spectators from './Spectators';

import { selectors } from 'state';

const Game: React.FC = () => {
  const { timer } = useSelector(selectors.session);

  return (
    <div>
      Game {timer}
      <Players />
      <Picks />
      <Spectators />
    </div>
  );
};

export default Game;
