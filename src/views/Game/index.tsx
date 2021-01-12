import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { COLORS, selectors } from 'state';
import { Chat } from 'components';
import { Progress } from 'antd';

import Players from './Players';
import Picks from './Picks';
import Spectators from './Spectators';
import Tabs from './Tabs';
import Navigation from './Navigation';
0;
import Rock from 'assets/images/rock.png';
import Paper from 'assets/images/paper.png';
import Scissors from 'assets/images/scissors.png';

const Game: React.FC = () => {
  //const { timer } = useSelector(selectors.session);

  const tabs = [
    { key: 'Chat', value: <Chat /> },
    { key: 'Settings', value: <div>Settings</div> },
  ];

  const makePercentage = (percent: number, count: number, src: string) => {
    return (
      <div className="stats__row">
        <Progress
          className="stats__percentage"
          strokeColor={COLORS.colorBlue}
          type="circle"
          percent={percent}
          width={130}
        />
        <div className="stats__group">
          <img src={src} width={90} alt="icon" className="stats__icon" />
          <div className="stats__counter">{count}</div>
        </div>
      </div>
    );
  };

  return (
    <div className="game defaultBg">
      <Navigation />
      <Tabs tabs={tabs} option="Chat" />

      <div className="game__panel game__main">
        <Players />
        <Picks />
      </div>

      <div className="game__panel">
        <div className="stats">
          <h3 className="stats__announce">Game starts in 5 seconds.</h3>
          <div className="stats__container">
            {[
              { percent: 33, count: 5, src: Rock },
              { percent: 33, count: 5, src: Paper },
              { percent: 33, count: 5, src: Scissors },
            ].map(({ percent, count, src }) => {
              return makePercentage(percent, count, src);
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
