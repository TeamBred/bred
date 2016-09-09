import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './nav'
import t from 'tcomb-form';
import { browserHistory } from 'react-router'

export default class Login extends React.Component {

  onSubmit(evt) {
    evt.preventDefault()
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
    const path = '/dashboard'
    browserHistory.push(path)
  }

  render() {
    return (
      <div>
        <h1> Login </h1>
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
