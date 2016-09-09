import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link} from 'react-router'

export default class Nav extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Signup</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
      </div>
    )
  }
}
