//user-controller.js
'use strict'
const user = require('../models/user');
const expenses = require('../models/expenses');

function signup(req, res) {
	console.log('in user-controller.signup')
	User.create({
			email: req.body.email,
			username: req.body.username,
			password: req.body.password,
			income: req.body.income
	}).then(function(user) {
			res.send('200');
	}).catch(function(err) {
					console.log('error', err);
	});

}

function show(req, res) {
	console.log('in user-controller.show')
	// user.sync;
	// expenses.sync;
	return res.send('user info')
}

module.exports = { signup, show};
