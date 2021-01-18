import React from 'react';
import { Progress } from 'antd';

import { COLORS, selectors } from 'state';
import { Avatar } from 'components';

import Rock from 'assets/images/rock.png';
import Paper from 'assets/images/paper.png';
import Scissors from 'assets/images/scissors.png';
import None from 'assets/images/none.png';
import { useSelector } from 'react-redux';

const Stats: React.FC = () => {
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
      <h3 className="stats__announce">Game starts in 5 seconds.</h3>
      <div className="stats__container">
        {[
          { percent: 33, count: 5, src: Rock },
          { percent: 33, count: 5, src: Paper },
          { percent: 33, count: 5, src: Scissors },
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
              src={crtPlayer?.pick ? Rock : None}
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
