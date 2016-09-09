//user-controller.js
'use strict'
const user = require('../models/user');

function signup(req, res) {
	console.log('in user-controller.signup')
}

function show(req, res) {
	console.log('in user-controller.show')
	// user.sync;
	return res.send('user info')
}

module.exports = { signup, show };