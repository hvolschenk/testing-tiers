import React from 'react';
import { Route, Switch } from 'react-router';

import About from 'pages/about';
import Home from 'pages/home';
import { about, home } from 'urls';

export default () => (
  <Switch>
    <Route component={About} path={about()} />
    <Route component={Home} path={home()} />
  </Switch>
);
