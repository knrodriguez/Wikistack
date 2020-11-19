const Sequelize = require('sequelize');
const { db } = require('./index');

const Page = db.define('page', {
  title: {
    type: Sequelize.STRING
  },
  slug: {
    type: Sequelize.STRING
  },
  content: {
    type: Sequelize.STRING
  },
  status: {
    type: Sequelize.ENUM('open','closed')
  }
})

module.exports = Page;
