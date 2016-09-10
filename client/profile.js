import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './nav';

export default class Profile extends React.Component {
  render() {
    let userLocal = JSON.parse(localStorage.getItem("user"));
    let username = userLocal.username;
    return (
      <div>
        <br />
        <h1>{username}</h1>
      </div>
  )
  }
}
