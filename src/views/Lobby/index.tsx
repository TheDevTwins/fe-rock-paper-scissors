import React from 'react';
import { Logo } from 'components';

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
            {/* <Player /> */}
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
