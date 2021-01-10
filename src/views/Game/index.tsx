import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectors } from 'state';

import Players from './Players';
import Picks from './Picks';
import Spectators from './Spectators';
import TabsMenu from './Tabs';
import Navigation from './Navigation';
import { Chat } from 'components';

const Game: React.FC = () => {
  // const { timer } = useSelector(selectors.session);

  const tabs = [
    { key: 'Chat', value: <Chat /> },
    { key: 'Settings', value: <div>Settings</div> },
  ];

  return (
    <div className="game defaultBg">
      <Navigation />
      <TabsMenu tabs={tabs} option="Chat" />
    </div>
  );
};

export default Game;
