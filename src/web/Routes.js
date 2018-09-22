import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/App/App';

/**
 *
 *
 * @class Routes
 * @return {Component}
 */
const Routes = () => <BrowserRouter>
  <Switch>
    <Route exact path="/" component={App} />
    <Route path="/post/:topic/:post" component={App} />
  </Switch>
</BrowserRouter>;

export default Routes;
