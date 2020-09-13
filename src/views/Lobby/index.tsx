import React from 'react';

import { Logo } from 'components';
import UserCustomization from './UserCustomization';

const Lobby: React.FC = () => {
  return (
    <div className="lobby defaultBg">
      <header className="wrapper">
        <Logo />
      </header>
      <div className="wrapper">
        <div className="lobby__panels">
          <div className="lobby__panel">
            <div className="lobby__title">Player</div>
            <UserCustomization />
          </div>
          <div className="lobby__panel">
            <div className="lobby__title">Lobby</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lobby;
