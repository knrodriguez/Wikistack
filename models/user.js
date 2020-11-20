const Sequelize = require('sequelize');
const {db} = require('./db');
const Page = require('./page');

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  }
});

Page.belongsTo(User, {as: 'author'});

module.exports = User;
