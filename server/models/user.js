// server/models/user.js
const Sequelize = require('sequelize');
const dbUrl = 'postgres://zqfgesav:s317KdarS_J7BqbMhGuuxtUxEJyRNcmN@elmer.db.elephantsql.com:5432/zqfgesav'
const sequelize = new Sequelize(dbUrl);
// const Expense = require('')


const User = sequelize.define('user2', {
  username: {
    type: Sequelize.STRING,
    // field: 'user_name' // Will result in an attribute that is firstName when user facing but first_name in the database
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
  freezeTableName: true // Model tableName will be the same as the model name
});

// User.hasMany(Expense, {as: 'Expenses'})

User.sync({force: true}).then(function () {
  // Table created
  // return User.create({
  //   firstName: 'John',
  //   lastName: 'Hancock'
  // });
});

module.exports = User;