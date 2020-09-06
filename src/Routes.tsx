import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

// import * as views from './views';

const Routes: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <Switch>
      {/*{token ? (*/}
      {/*  <>*/}
      {/*    <Route path={`/dashboard`}>*/}
      {/*      {userType === TRAINEE && <views.TraineeDashboard />}*/}
      {/*      {userType === TRAINER && <views.TrainerDashboard />}*/}
      {/*      {userType === ADMIN && <views.AdminDashboard />}*/}
      {/*    </Route>*/}
      {/*    <Route path={`/session/:id`}>*/}
      {/*      {userType === TRAINEE && <views.TraineeSession />}*/}
      {/*      {userType === TRAINER && <views.TrainerSession />}*/}
      {/*    </Route>*/}
      {/*    <Redirect from={`/auth/login`} to={`/dashboard`} />*/}
      {/*  </>*/}
      {/*) : (*/}
      {/*  <>*/}
      {/*    <Route path={`/auth`}>*/}
      {/*      <views.Auth />*/}
      {/*    </Route>*/}
      {/*    <Redirect to={`/auth/login`} />*/}
      {/*  </>*/}
      {/*)}*/}
    </Switch>
  );
};

export default Routes;
