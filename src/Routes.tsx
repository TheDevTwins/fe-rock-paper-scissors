import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Home, Lobby } from './views';

const Routes: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/session/:id">
        <Lobby />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
