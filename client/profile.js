import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link} from 'react-router'
import $ from 'jquery';

export default class Profile extends React.Component {

  submit(e) {
    e.preventDefault();

    //create object from the values of the inputs
    const amount = e.target.elements[0].value;
    const category = e.target.elements[1].value;
    const username = JSON.parse(localStorage.getItem('user')).username;

    const expenseData = {
    	amount: amount,
    	category: category,
    	username: username,
      recurring: true
    }
    //post request to send the new expense to the database
		$.ajax({
	    type: 'POST',
	    url: 'http://localhost:3000/api/user/' + username + '/expense',
	    data: expenseData
	  })
	  .done(function(data) {
      //if successful set items to local storage
      localStorage.setItem('expenses', JSON.stringify(data))
	  });

    //resets field
    e.target.elements[0].value = "";
  }

  render() {
    return (
    	<div>
    		<h1>Add Recurring Expenses</h1>
    		<form onSubmit={this.submit}>
    			<input className="amount" placeholder="Enter amount" />
    			<select name="Category">
						<option value="food">Food</option>
						<option value="bills">Bills</option>
						<option value="entertainment">Entertainment</option>
						<option value="other">Other</option>
					</select>
					<button type="submit" className="submit-button">Submit</button>
    		</form>
    	</div>
    )
  }
}
