import React, { useState } from 'react';
import { hydrate } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Logo, RpsAnimation } from 'components';

import { createSession } from 'state';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div className="home defaultBg">
      <Logo />
      <RpsAnimation />
      <div onClick={() => dispatch(createSession({}))} className="home__btn">
        <span className="home__btn-text">New Game</span>
      </div>
    </div>
  );
};

export default Home;
