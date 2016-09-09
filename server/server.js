'use strict'
const express = require('express');
const app = express();

const userCtrl = require('./controllers/user-controller.js');

app.use(express.static(__dirname + '/client'));

app.get('/', userCtrl.signup);
app.get('/user/:id', userCtrl.show);

app.listen(8080, () => {
	console.log('serving port 8080..');
});
