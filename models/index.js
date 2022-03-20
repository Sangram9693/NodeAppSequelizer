const Sequelize = require('sequelize');
const DB_DETAILS = require('../dbConstant');
const Student = require('./Student');

const sequelize = new Sequelize(
  DB_DETAILS.DATABASE,
  DB_DETAILS.USER,
  DB_DETAILS.PASSWORD,
  {
    host: DB_DETAILS.HOST,
    dialect: DB_DETAILS.DIALECT,
    operatorsAliases: false,
    pool: DB_DETAILS.POOL,
  },
);

const connection = {};
connection.Sequelize = Sequelize;
connection.sequelize = sequelize;

// Modules added to the connection
connection.Student = Student(sequelize, Sequelize);

module.exports = connection;
