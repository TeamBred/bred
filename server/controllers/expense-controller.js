//user-controller.js
'use strict'
const Expenses = require('../models/expenses');

function getAll(req, res) {
 	Expenses.findAll({ where: {
    	username: req.params.username
  	}
  }).then(function(expense) {
		return res.status('200').json(expense);
	}).catch(function(err) {
		console.log('error', err);
	});
}

function create(req, res) {
	Expenses.create({
		amount: req.body.amount,
		category: req.body.category,
		username: req.body.username
	}).then(function(expense) {
		return res.status('200').json(expense);
	}).catch(function(err) {
		console.log('error', err);
	});
}

module.exports = { getAll, create };