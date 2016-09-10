//user-controller.js
'use strict'
const Expenses = require('../models/expenses');

function getAll(req, res) {
 	Expenses.findAll({ where: {
    	user_id: req.params.id
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
		user_id: req.body.user_id
	}).then(function(expense) {
		return res.status('200').json(expense);
	}).catch(function(err) {
		console.log('error', err);
	});
}

module.exports = { getAll, create };