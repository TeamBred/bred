import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './nav';
import {Router, Route, Link, browserHistory} from 'react-router';
import $ from 'jquery';

export default class Signup extends React.Component {
	constructor(props){
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(evt) {
		this.props.changeUserInfo(evt.target.elements[0].value, evt.target.elements[1].value)
		const self = this;
		evt.preventDefault();

		const username = evt.target.elements[0].value;
		const email = evt.target.elements[1].value;
		const password = evt.target.elements[2].value;
		const confirmPassword = evt.target.elements[3].value;
		const income = evt.target.elements[4].value;
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
				signupData.email = email;
				signupData.password = password;
				signupData.income = password;
				let stringData = JSON.stringify({username: username, email: email, income: income});

				$.ajax({
				    url : "http://localhost:3000/signup",
				    type: "POST",
				    data : signupData,
				    success: function(data, textStatus, jqXHR)
				    {
				      localStorage.setItem("user", stringData);
							const path = `/profile`
							browserHistory.push(path)
				    },
				    error: function (jqXHR, textStatus, errorThrown)
				    {
							console.log('no bueno');
				    }
				});
		}
	}

  render() {
		// console.log('this is props', this.props)
    return (
      <div>
        <div className="component-container">
          <h1 className="signup-header">BRED</h1>
          <h3 className="signup-subhead">Sign up now</h3>
          <form onSubmit={this.onSubmit}>
            <input className="signup-input input" type="text" placeholder="username"/> {' '}
            <input className="signup-input input" type="text" placeholder="email"/>{' '}
            <input className="signup-input input" type="password" placeholder="password"/>{' '}
            <input className="signup-input input" type="password" placeholder="confirm password"/>{' '}
            <input className="signup-input input" type="text" placeholder="income"/>{' '}
            <button type="submit" className="submit-button submit">Submit</button>
          </form>
          <h5>Already with us?  <Link to="/login">Login</Link></h5>
        </div>
      </div>
    )
  }
}
