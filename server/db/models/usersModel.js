var sequelize = require('../db.js');
var Sequelize = require('sequelize');

var User = sequelize.define('users',
  {
    firstName: {
      type: Sequelize.STRING,
      field: 'first_name',
    },
    lastName: {
      type: Sequelize.STRING,
      field: 'last_name',
    },
    email: {
      type: Sequelize.STRING,
      field: 'email',
    },
    phone: {
      type: Sequelize.STRING,
      field: 'phone',
    },
    password: {
      type: Sequelize.STRING,
      field: 'password',
    },
    address: {
      type: Sequelize.STRING,
      field: 'address',
    },
    zip: {
      type: Sequelize.STRING,
      field: 'zip',
    },
    chef: {
      type: Sequelize.BOOLEAN,
      field: 'chef',
    },
    numOrders: {
      type: Sequelize.INTEGER,
      field: 'num_orders',
      defaultValue: 0,
    },
    avgRating: {
      type: Sequelize.FLOAT,
      field: 'avg_rating',
      defaultValue: 0,
    },
  },
  {
    timestamps: true,
    freezeTableName: true,
  } // Model tableName will be the same as the model name)
);

module.exports = User;
