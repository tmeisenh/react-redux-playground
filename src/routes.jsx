import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import ourHistory from './services/history-provider';
import MainScreen from './screens/main';

import WholeOtherScreen from './fizzbuzz';
import TableView from './components/list';

// Multiple screens, b/c why not?
const routes = (
  <Router history={ourHistory}>
    <Switch>
      <Route exact path="/" component={MainScreen} />
      <Route path="/fizzbuzz" component={WholeOtherScreen} />
      <Route path="/listy" component={TableView} />
    </Switch>
  </Router>
);

export default routes;
