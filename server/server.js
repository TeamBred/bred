'use strict'
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const userCtrl = require('./controllers/user-controller.js');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/user.js');
const PassportUse = require('./passport.js')

app.use(passport.initialize());
app.use(passport.session());
app.use(cors());
app.use(bodyParser());
app.use(express.static(__dirname + '/client'));

app.get('/signup', userCtrl.signup);
app.get('/user/:id', userCtrl.show);
app.post('/login',
  passport.authenticate('local'), function(req, res) {
    // authentication was successful.
    // `req.user` contains the authenticated user.
    res.send('authentication successful');
  }
);

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});


app.listen(3000, () => {
  console.log('serving port 3000..');
});
