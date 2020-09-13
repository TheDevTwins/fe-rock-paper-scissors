import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';

import { Helmet } from 'react-helmet-async';

import history from './state/history';

import Routes from './Routes';

const App: React.FC = () => {
  return (
    <Router history={history}>
      <Helmet
        defer={false}
        htmlAttributes={{ lang: 'en' }}
        encodeSpecialCharacters={true}
        defaultTitle={'Rock Paper Scissors'}
        titleTemplate={`%s | RPS`}
        titleAttributes={{ itemprop: 'name', lang: 'en' }}
      />
      <Routes />
    </Router>
  );
};

App.defaultProps = {};

export default App;
