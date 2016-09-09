// server/models/user.js
var Expenses = require('./expenses');
const Sequelize = require('sequelize');
const dbUrl = 'postgres://zqfgesav:s317KdarS_J7BqbMhGuuxtUxEJyRNcmN@elmer.db.elephantsql.com:5432/zqfgesav'
const sequelize = new Sequelize(dbUrl);


const User = sequelize.define('user2', {
  username: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  income: {
    type: Sequelize.STRING
  }
}, {
      classMethods:{
          associate:function(models){
              User.hasMany(models.Expenses);
          }
      }
  },{
  freezeTableName: true // Model tableName will be the same as the model name
});

// User.hasMany(Expenses, {as: 'expense'});

User.sync({force: true}).then(function () {
  return User.create({
    username: 'John',
    password: 'Hancock',
    email: 'me@me.com',
    income: 'income'
  });
});

module.exports = User;
