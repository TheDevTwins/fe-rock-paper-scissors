import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectors } from 'state';

import Settings from 'assets/images/settings.png';
import Chat from 'assets/images/chat.png';
import Players from './Players';
import Picks from './Picks';
import Spectators from './Spectators';

const Game: React.FC = () => {
  // const { timer } = useSelector(selectors.session);

  return (
    <div className="game defaultBg">
      <div className="sideBar">
        <div className="sideBar__item">
          <img src={Chat} alt="Chat icon" />
        </div>
        <div className="sideBar__item">
          <img src={Settings} alt="Settings icon" />
        </div>
      </div>

      <div className="actionBar">
        <div className="actionBar__item">i</div>
        <div className="actionBar__item">i</div>
        <div className="actionBar__item">i</div>
        <div className="actionBar__item">i</div>
        <div className="actionBar__item">i</div>
      </div>

      <Players />
    </div>
  );
};

export default Game;
