import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link} from 'react-router'
import $ from 'jquery';

export default class Expense extends React.Component {

  submit(e) {
  	let placeholderState = {user: {id: 1}}
    e.preventDefault();
    const amount = e.target.elements[0].value;
    const category = e.target.elements[1].value;
    const user_id = placeholderState.user.id;
    const expenseData = {
    	amount: amount,
    	category: category,
    	user_id: user_id
    }

		$.ajax({
	    type: 'POST',
	    url: 'http://localhost:3000/api/user/' + placeholderState.user.id + '/expense',
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
