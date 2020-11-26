import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Home, Lobby, Game, DataRetriever } from './views';

import { selectors, PENDING } from 'state';

const Routes: React.FC = () => {
  const dispatch = useDispatch();
  const session = useSelector(selectors.session);

  return (
    <Switch>
      <Route exact path="/session/:id">
        <DataRetriever />
        {/* Fix this when design is over */}
        {/* {!session || session.status === PENDING ? <Lobby /> : <Game />} */}
        <Game />
      </Route>
      {session && <Redirect to={`/session/${session.id}`} />}
      <Route exact path="/">
        <Home />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
