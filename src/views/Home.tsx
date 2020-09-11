import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Logo } from '../components/index';

const Home: React.FC = () => {
  return (
    <div className="home">
      <header className="home__header">
        <Logo />
      </header>
      <main className="home__container">
        {/* <RpsAnimation /> */}
        <div className="home__btn">
          <span className="home__btn-text">New Game</span>
        </div>
      </main>
    </div>
  );
};

export default Home;
