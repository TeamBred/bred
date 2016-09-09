'use strict'
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const userCtrl = require('./controllers/user-controller.js');
var passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/user.js');


// define the local authentication strategy

passport.use(new LocalStrategy(function(username, password, done) {
	console.log('username',username)
  process.nextTick(function() {
    User.findOne({
      where: {
        'username': username
      }
    }).then(function(user) {
			console.log(user)
      if (!user) {
				console.log('Unknown user')
        done(null, false, {
          message: 'Unknown user'
        });
      } else if (password != user.password) {
				console.log('InvalidPass')
        done(null, false, {
          message: 'Invalid password'
        });
      } else {
        done(null, user);
      }
    }).error(function(err) {
      done(err);
    });
  });
}));


app.use(passport.initialize());
app.use(passport.session());
app.use(cors());
app.use(bodyParser());
app.use(express.static(__dirname + '/client'));

app.get('/', userCtrl.signup);
app.get('/user/:id', userCtrl.show);
app.post('/login',
  passport.authenticate('local', {
    successRedirect: '/loginSuccess',
    failureRedirect: '/loginFailure'
  })
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
