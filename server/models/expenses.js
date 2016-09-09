var User = require('./user');
const Sequelize = require('sequelize');
const dbUrl = 'postgres://zqfgesav:s317KdarS_J7BqbMhGuuxtUxEJyRNcmN@elmer.db.elephantsql.com:5432/zqfgesav'
const sequelize = new Sequelize(dbUrl);

const Expenses = sequelize.define('expenses', {
 title: {
   type: Sequelize.STRING
 },
 category: {
   type: Sequelize.STRING
 },
 amount: {
   type: Sequelize.STRING
 },
 date: {
   type: Sequelize.STRING
 },
 recurring: {
   type: Sequelize.BOOLEAN
 }
}, {
      classMethods:{
          associate:function(models){
              Expenses.belongsTo(models.User);
          }
      }
  },

{
 freezeTableName: true // Model tableName will be the same as the model name
});

// Expenses.belongsTo(User); // Will add a expenses attribute to User to hold the primary key value for expenses

Expenses.sync({force: true}).then(function () {
 // Table created
 return Expenses.create({
   title: 'Bought some meats',
   category: 'Food',
   amount: '100',
   date: '1/28/2016',
   recurring: false
 });
});


module.exports = Expenses;
