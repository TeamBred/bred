//user-controller.js
'use strict'
const User = require('../models/user');
const expenses = require('../models/expenses');

function signup(req, res) {
	User.create({
		email: req.body.email,
		username: req.body.username,
		password: req.body.password,
		income: req.body.income
	}).then(function(user) {
		res.status('200').json(user);
	}).catch(function(err) {
		console.log('error', err);
	});
}

function getUser(req, res) {
 	User.find({ where: {
    	username: req.params.username
  	}
  }).then(function(expense) {
		return res.status('200').json(expense);
	}).catch(function(err) {
		console.log('error', err);
	});
}

module.exports = { signup, getUser };
