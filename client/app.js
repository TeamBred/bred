import React from 'react';
import {Router, Route, Link, hashHistory} from 'react-router'
import ReactDOM from 'react-dom';
import DashBoard from './dashboard'
import Login from './login'
import Signup from './signup'
import Profile from './profile'
import Nav from './nav';
import * as V from 'victory';

class App extends React.Component {
  render() {
    return (
      <div>
      <Nav />
      {this.props.children}
      </div>
    )
  }
}

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App} />
    <Route path="/dashboard" component={DashBoard} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
    <Route path="/profile" component={Profile} />
  </Router>
), document.getElementById('content'));
