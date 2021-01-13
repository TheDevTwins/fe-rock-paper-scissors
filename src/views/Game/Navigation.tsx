import React from 'react';

import { Logo } from 'components';

import { TABS } from './index';

type props = {
  callback: React.Dispatch<React.SetStateAction<string>>;
};

const makeBtn = (src: string, click: () => void) => {
  return (
    <div className="gameNav__btn" onClick={click}>
      <img src={src} alt="Settings" />
    </div>
  );
};

const Navigation: React.FC<props> = ({ callback }) => {
  return (
    <div className="gameNav">
      <Logo />

      <div className="gameNav__buttons">
        {TABS.map(({ key, value, icon }) => {
          return makeBtn(icon, () => callback(key));
        })}
      </div>
    </div>
  );
};

export default Navigation;
