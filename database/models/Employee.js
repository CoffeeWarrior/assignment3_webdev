const Sequelize = require("sequelize");
const db = require("../db");

const Employee = db.define("Employee", {
  id: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true,
  },
  firstname: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  department: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

module.exports = Employee;
