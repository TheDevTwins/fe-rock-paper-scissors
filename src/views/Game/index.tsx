import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectors } from 'state';
import { Chat } from 'components';

import Players from './Players';
import Picks from './Picks';
import Spectators from './Spectators';
import Tabs from './Tabs';
import Navigation from './Navigation';
import Stats from './Stats';
import Settings from './Settings';

import SettingsIcon from 'assets/images/settings.png';
import ChatIcon from 'assets/images/chat.png';

const CHAT = { key: 'Chat', value: <Chat />, icon: ChatIcon };
const SETTINGS = {
  key: 'Settings',
  value: <Settings />,
  icon: SettingsIcon,
};

export const TABS = [CHAT, SETTINGS];

const Game: React.FC = () => {
  //const { timer } = useSelector(selectors.session);

  const [selectedTab, setSelectedTab] = useState(TABS[0].key);

  return (
    <div className="game defaultBg">
      <Navigation callback={setSelectedTab} />
      <Tabs tabs={TABS} option={selectedTab} />

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
