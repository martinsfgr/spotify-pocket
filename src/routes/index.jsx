import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LoginRoute from './LoginRoute';
import { Login } from '../containers';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={LoginRoute} />
    </Switch>
  )
}

export default Routes;
