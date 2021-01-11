import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectors } from 'state';

import Players from './Players';
import Picks from './Picks';
import Spectators from './Spectators';
import Tabs from './Tabs';
import Navigation from './Navigation';
import { Chat } from 'components';

const Game: React.FC = () => {
  //const { timer } = useSelector(selectors.session);

  const tabs = [
    { key: 'Chat', value: <Chat /> },
    { key: 'Settings', value: <div>Settings</div> },
  ];

  return (
    <div className="game defaultBg">
      <Navigation />
      <Tabs tabs={tabs} option="Chat" />

      <div className="game__panel game__main">
        <Players />
        <Picks />
      </div>

      <div className="game__panel">
        <div className="stats"></div>
      </div>
    </div>
  );
};

export default Game;
