import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectors } from 'state';

import Players from './Players';
import Picks from './Picks';
import Spectators from './Spectators';
import TabsMenu from './TabsMenu';

const Game: React.FC = () => {
  // const { timer } = useSelector(selectors.session);

  return (
    <div className="game defaultBg">
      <TabsMenu className="game__tabs" />
      <div className="game__main"></div>
    </div>
  );
};

export default Game;
