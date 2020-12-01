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

      {/* <div className="sideBar">
        <div className="sideBar__item">
          <img src={Chat} alt="Chat icon" />
        </div>
        <div className="sideBar__item">
          <img src={Settings} alt="Settings icon" />
        </div>
      </div> */}

      {/* <div className="actionBar">
        <div className="actionBar__item">i</div>
        <div className="actionBar__item">i</div>
        <div className="actionBar__item">i</div>
        <div className="actionBar__item">i</div>
        <div className="actionBar__item">i</div>
      </div>

      <Players /> */}
    </div>
  );
};

export default Game;
