import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';
import ReactDOM from 'react-dom';
import DashBoard from './client/dashboard'
import Login from './client/login'
import Signup from './client/signup'
import Profile from './client/profile'
import Nav from './client/nav';
import theirApp from './theirApp';
import * as V from 'victory';



ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={theirApp} >
        <Route path="/dashboard/:userName" component={DashBoard} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/profile" component={Profile} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('content'));
