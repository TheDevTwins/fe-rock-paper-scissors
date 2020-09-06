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
        defaultTitle={'Portfolio Manager'}
        titleTemplate={`%s | PM`}
        titleAttributes={{ itemprop: 'name', lang: 'en' }}
      />
      <Routes />
    </Router>
  );
};

App.defaultProps = {};

export default App;
