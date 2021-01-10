import React from 'react';

import { Logo } from 'components';

import SettingsIcon from 'assets/images/settings.png';
import ChatIcon from 'assets/images/chat.png';

const makeBtn = (src: string, click: () => void) => {
  return (
    <div className="gameNav__btn" onClick={click}>
      <img src={src} alt="Settings" />
    </div>
  );
};

const Navigation: React.FC = () => {
  return (
    <div className="gameNav">
      <Logo />

      <div className="gameNav__buttons">
        {makeBtn(SettingsIcon, () => null)}
        {makeBtn(ChatIcon, () => null)}
      </div>
    </div>
  );
};

export default Navigation;
