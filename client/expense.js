import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link} from 'react-router'
import $ from 'jquery';

export default class Expense extends React.Component {

  submit(e) {
    e.preventDefault();
    const amount = e.target.elements[0].value;
    const category = e.target.elements[1].value;
    // const username = this.props.username;
    const username = 'placeholder';

    const expenseData = {
    	amount: amount,
    	category: category,
    	username: username
    }

		$.ajax({
	    type: 'POST',
	    url: 'http://localhost:3000/api/user/' + username + '/expense',
	    data: expenseData
	  })
	  .done(function(data) {
	    console.log('expanseData - ',data);
	  });
  }

  render() {
    return (
    	<div>
    		<h1>Add Expense</h1>
    		<form onSubmit={this.submit}>
    			<input placeholder="Enter amount" />
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
