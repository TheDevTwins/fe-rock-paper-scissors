import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Progress } from 'antd';

import { COLORS, selectors, ROCK, PAPER, SCISSORS, ICONS } from 'state';
import { Avatar } from 'components';
import None from 'assets/images/none.png';

const Stats: React.FC = () => {
  const session = useSelector(selectors.session);
  const timer = session.timer;

  const makePercentage = (
    percent: number,
    count: number,
    src: string,
    key: number | string
  ) => {
    return (
      <div className="stats__row" key={key}>
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

  const crtPlayer = useSelector(selectors.currentPlayer);

  return (
    <div className="stats">
      <h3 className="stats__announce">Game starts in {timer} seconds.</h3>
      <div className="stats__container">
        {[
          { percent: 33, count: 5, src: ICONS[ROCK] },
          { percent: 33, count: 5, src: ICONS[PAPER] },
          { percent: 33, count: 5, src: ICONS[SCISSORS] },
        ].map(({ percent, count, src }, i) => {
          return makePercentage(percent, count, src, i);
        })}
      </div>
      <div className="crtPlayer">
        <div className="crtPlayer__avatar">
          <Avatar {...crtPlayer?.avatar} />
        </div>
        <div className="crtPlayer__container">
          <div className="crtPlayer__name">{crtPlayer?.name}</div>
          <div className="crtPlayer__container--row">
            <div className="hp">
              <div className="hp__icon"></div>
              <div className="hp__counter">{crtPlayer?.points}</div>
            </div>
            <img
              src={
                typeof crtPlayer.pick === 'number'
                  ? (ICONS as any)[crtPlayer.pick]
                  : None
              }
              alt="icon"
              className="crtPlayer__pick"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
