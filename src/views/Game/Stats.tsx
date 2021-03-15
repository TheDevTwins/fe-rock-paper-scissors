import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Progress } from 'antd';

import { COLORS, selectors, ROCK, PAPER, SCISSORS, ICONS } from 'state';
import { Stat } from './types';
import { Avatar } from 'components';
import None from 'assets/images/none.png';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';

const Stats: React.FC = () => {
  const { timer } = useSelector(selectors.session);
  const picks_revealed = useSelector(selectors.picks_revealed);
  const playerList = useSelector(selectors.playersList);

  // Initial state of stats
  const initStats = [
    {
      index: ROCK,
      count: 0,
      percentage: 0,
    },
    {
      index: PAPER,
      count: 0,
      percentage: 0,
    },
    {
      index: SCISSORS,
      count: 0,
      percentage: 0,
    },
  ];

  const validPicks = () => {
    const valid = playerList.reduce((acc, player) => {
      return acc && typeof player.pick === 'number';
    }, true);

    console.log(valid);
    return valid;
  };

  const generateStats = () => {
    const counts = {
      [ROCK]: 0,
      [PAPER]: 0,
      [SCISSORS]: 0,
    };
    const total = playerList.length;

    playerList.forEach(player => {
      (counts as any)[player.pick as number]++;
    });

    const result: Stat[] = initStats.map(stat => {
      const count: number = (counts as any)[stat.index];
      const percentage = Math.floor((count * 100) / total);
      return {
        index: stat.index,
        count,
        percentage,
      };
    });

    return result;
  };

  const makePercentage = ({ index, count, percentage }: Stat) => {
    return (
      <div className="stats__row" key={index}>
        <Progress
          className="stats__percentage"
          strokeColor={COLORS.colorBlue}
          type="circle"
          width={130}
          format={percent => {
            return (
              <span style={{ color: COLORS.colorGrey }}>{percent + '%'}</span>
            );
          }}
          percent={percentage}
        />
        <div className="stats__group">
          <img
            src={(ICONS as any)[index]}
            width={90}
            alt="icon"
            className="stats__icon"
          />
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
        {(picks_revealed && validPicks() ? generateStats() : initStats).map(
          makePercentage
        )}
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
