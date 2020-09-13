import React, { useState } from 'react';
import { hydrate } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Logo, RpsAnimation } from 'components';

import { createSession } from '../state/app/actions';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div className="home defaultBg">
      <header className="home__header">
        <Logo />
      </header>
      <main className="home__container">
        <RpsAnimation />
        <div onClick={() => dispatch(createSession({}))} className="home__btn">
          <span className="home__btn-text">New Game</span>
        </div>
      </main>
    </div>
  );
};

export default Home;
