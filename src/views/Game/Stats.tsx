import React from 'react';
import { Progress } from 'antd';

import { COLORS } from 'state';
import { Avatar } from 'components';

import Rock from 'assets/images/rock.png';
import Paper from 'assets/images/paper.png';
import Scissors from 'assets/images/scissors.png';

const Stats: React.FC = () => {
  const avatarProps = {
    skin: 0,
    face: 0,
    shirt: 0,
    hat: 0,
  };

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
          <Avatar {...avatarProps} />
        </div>
        <div className="crtPlayer__container">
          <div className="crtPlayer__name">Player Name</div>
          <div className="crtPlayer__container--row">
            <div className="hp">
              <div className="hp__icon"></div>
              <div className="hp__counter">10</div>
            </div>
            <img src={Rock} alt="icon" className="crtPlayer__pick" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
