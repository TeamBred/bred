//user-controller.js
'use strict'
const user = require('../models/user');
const expenses = require('../models/expenses');

function signup(req, res) {
	console.log('in user-controller.signup')
}

function show(req, res) {
	console.log('in user-controller.show')
	user.sync;
	expenses.sync;
	return res.send('user info')
}

module.exports = { signup, show };
