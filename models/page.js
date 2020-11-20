const Sequelize = require('sequelize');
const { db } = require('./db');

const Page = db.define('page', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.STRING,
    allowNull: false
  },
  status: {
    type: Sequelize.ENUM('open','closed')
  }
});

Page.beforeValidate((page) => {
  page.slug = page.title.replace(/\s+/g, '_').replace(/\W/g, '');
})

module.exports = Page;
