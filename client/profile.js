import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link} from 'react-router'
import $ from 'jquery';

export default class Profile extends React.Component {

  refreshData() {
    const username = JSON.parse(localStorage.getItem('user')).username;
    $.ajax({
      type: 'GET',
      url: 'http://localhost:3000/api/user/' + username + '/expense'
    })
    .done(function(data) {
      document.getElementById('rec-expenses-list').innerHTML = '';
      data.forEach((exp) => {
        if(exp.recurring) {
          let listElem = document.createElement('div');
          listElem.innerHTML = exp.category + '  $' + exp.amount;
          document.getElementById('rec-expenses-list').appendChild(listElem);
        }
      })
    })    
  }

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
      $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/api/user/' + username + '/expense'
      })
      .done(function(data) {
        document.getElementById('rec-expenses-list').innerHTML = '';
        data.forEach((exp) => {
          if(exp.recurring) {
            let listElem = document.createElement('div');
            listElem.innerHTML = exp.category + '  $' + exp.amount;
            document.getElementById('rec-expenses-list').appendChild(listElem);
          }
        })
      }) 
	  });

    //resets field
    e.target.elements[0].value = "";
  }

  render() {
    this.refreshData();
    return (
    	<div>
    		<h1>Add Recurring Expenses</h1>
    		<form onSubmit={this.submit}>
    			<input className="amount" placeholder="Enter amount" />
    			<select name="Category">
            <option value="rent">Rent</option>
						<option value="food">Food</option>
						<option value="bills">Bills</option>
						<option value="entertainment">Entertainment</option>
						<option value="other">Other</option>
					</select>
					<button type="submit" className="submit-button">Submit</button>
    		</form>
        <div id="rec-expenses-list">
        </div>
    	</div>
    )
  }
}


