import React, { useState } from 'react';

import Players from './Players';
import Picks from './Picks';
import Spectators from './Spectators';
import TabDisplay from './TabDisplay';
import Navigation from './Navigation';
import Stats from './Stats';
import { TabProvider } from './TabProvider';

const Game: React.FC = () => {
  return (
    <div className="game defaultBg">
      <TabProvider>
        <Navigation />
        <TabDisplay />
      </TabProvider>

      <div className="game__panel game__main">
        <Players />
        <Picks />
      </div>

      <div className="game__panel">
        <Stats />
      </div>
    </div>
  );
};

export default Game;
