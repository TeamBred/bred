import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './nav'
import { browserHistory } from 'react-router'
import $ from 'jquery';

export default class Login extends React.Component {

  onSubmit(evt) {
    var self
    evt.preventDefault()
    self = this
    const userName = evt.target.elements[0].value
    const password = evt.target.elements[1].value
    const email = evt.target.elements[2].value
    const income = evt.target.elements[3].value

    const value = {
      username: userName,
      password: password,
      email: email,
      income: income
    }
    if (value) {
      console.log(value)
    }
    let stringData = JSON.stringify({username: userName, email: email});

    $.ajax({
        url : "http://localhost:3000/login",
        type: "POST",
        data : value,
        success: function(data, textStatus, jqXHR)
        {
          localStorage.setItem("user", stringData);
          const path = `/dashboard/${userName}`
          browserHistory.push(path)
        },
        error: function (jqXHR, textStatus, errorThrown)
        {
          console.log('no bueno');
        }
    });
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.onSubmit}>
          <input type="text" placeholder="username"/> {' '}
          <input type="password" placeholder="password"/>{' '}
          <input type="text" placeholder="email"/>{' '}
          <input type="text" placeholder="income"/>{' '}
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    )
  }
}
