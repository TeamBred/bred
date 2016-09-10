import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './nav';
import {Router, Route, Link} from 'react-router';
import $ from 'jquery';
// import store from './index';

export default class Signup extends React.Component {
	onSubmit(evt) {
		const self = this;
		evt.preventDefault();

		const username = evt.target.elements[0].value;
		const email = evt.target.elements[1].value;
		const password = evt.target.elements[2].value;
		const confirmPassword = evt.target.elements[2].value;
		let signupData = {};

		if(password !== confirmPassword) {
			console.log('passwords dont match', password, confirmPassword)
		} else if(username === '') {
			// also check if name already taken
			console.log('enter a username')
		} else if(email === '') {
			// check if email is unique
			console.log('enter email')
		}else {
				signupData.username = username;
				signupData.email = email,
				signupData.password = password
				sendData(signupData);
		}
		function sendData(signupData) {
		  $.ajax({
		    type: 'POST',
		    url: 'http://localhost:3000/signup',
		    data: signupData
		  })
		  .done(function(data) {
		    console.log('userData!!!!! - ',data);
		  });
		}
	}

  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <form onSubmit={this.onSubmit}>
          <input type="text" placeholder="username"/> {' '}
          <input type="text" placeholder="email"/>{' '}
          <input type="password" placeholder="password"/>{' '}
          <input type="password" placeholder="confirm password"/>{' '}
          <button type="submit" className="submit-button">Submit</button>
        </form>
        <Link to="/login">Login</Link>
      </div>
    )
  }
}
