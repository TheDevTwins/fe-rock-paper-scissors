import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Home } from './views';

const Routes: React.FC = () => {
  const dispatch = useDispatch();

  return <Home />;
};

export default Routes;
