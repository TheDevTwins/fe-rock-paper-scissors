import React, { useState } from 'react';
import { useInterval } from 'services';

import Rock from 'assets/images/rock.png';
import Paper from 'assets/images/paper.png';
import Scissors from 'assets/images/scissors.png';

const RpsAnimation: React.FC = () => {
  const images: string[] = [Rock, Paper, Scissors];

  type icon = {
    index: number;
    visible: number;
    fadeIn: number;
    fadeOut: number;
  };

  type iconGroups = {
    left: icon[];
    right: icon[];
  };

  const initValues: iconGroups = {
    left: [
      { index: 0, visible: 1, fadeIn: 1, fadeOut: 0 },
      { index: 1, visible: 0, fadeIn: 0, fadeOut: 0 },
      { index: 2, visible: 0, fadeIn: 0, fadeOut: 0 },
    ],
    right: [
      { index: 0, visible: 0, fadeIn: 0, fadeOut: 0 },
      { index: 1, visible: 1, fadeIn: 1, fadeOut: 0 },
      { index: 2, visible: 0, fadeIn: 0, fadeOut: 0 },
    ],
  };

  const [icons, setIcons] = useState<iconGroups>(initValues);

  const buildIconArray: (arr: icon[]) => JSX.Element[] = arr => {
    return arr.map(icon => {
      return (
        <img
          key={icon.index}
          src={images[icon.index]}
          className={`rps__img
          ${icon.visible ? 'visible' : ''}
          ${icon.fadeIn ? 'fadeIn' : ''}
          ${icon.fadeOut ? 'fadeOut' : ''}`}
        />
      );
    });
  };

  const states: { l: number; r: number }[] = [
    { l: 0, r: 1 },
    { l: 2, r: 1 },
    { l: 2, r: 0 },
    { l: 1, r: 0 },
    { l: 1, r: 2 },
    { l: 0, r: 2 },
  ];

  const [counter, setCounter] = useState<number>(0);

  const updateIcons: (iconArr: icon[], iconType: number) => icon[] = (
    iconArr,
    iconType
  ) => {
    console.log({ iconType });
    return iconArr.map((icon, i) => {
      const fadeOut = icon.visible && !icon.fadeOut ? 1 : 0;
      const fadeIn = iconType === i ? 1 : 0;
      const visible = iconType === i ? 1 : 0;
      return { index: i, fadeOut: fadeOut, fadeIn: fadeIn, visible: visible };
    });
  };

  useInterval(() => {
    setIcons({
      left: updateIcons(icons.left, states[counter].l),
      right: updateIcons(icons.right, states[counter].r),
    });

    setCounter(counter != states.length - 1 ? counter + 1 : 0);
  }, 1000 * 3);

  return (
    <div className="rps">
      <div className="rps__list rps__list--left">
        {buildIconArray(icons.left)}
      </div>
      <div className="rps__list rps__list--right">
        {buildIconArray(icons.right)}
      </div>
    </div>
  );
};

export default RpsAnimation;
