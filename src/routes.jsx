import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import ourHistory from './services/history-provider';
import Screen from './screen';

const routes = (
  <Router history={ourHistory}>
    <Switch>
      <Route path="/" component={Screen} />
    </Switch>
  </Router>
);

export default routes;
