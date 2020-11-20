// const Sequelize = require('sequelize');
// const db = new Sequelize('postgres://localhost:5432/wikistack', {
//   logging: false
// });
const { db } = require('./db');
const Page = require('./page');
const User = require('./user');



// const User = db.define('user', {
//   name: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   email: {
//     type: Sequelize.STRING,
//     allowNull: false,
//     unique: true,
//     validate: {
//       isEmail: true
//     }
//   }
// });

// const Page = db.define('page', {
//   title: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   slug: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   content: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   status: {
//     type: Sequelize.ENUM('open','closed'),
//     // defaultValue: 'closed'
//   }
// });

// Page.beforeValidate((page) => {
//   page.slug = page.title.replace(/\s+/g, '_').replace(/\W/g, '');
// })

// Page.belongsTo(User, {as: 'author'});

module.exports = {
  db,
  Page,
  User
};
