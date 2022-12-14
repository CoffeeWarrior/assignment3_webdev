const Sequelize = require("sequelize");
const db = require("../db");

const Task = db.define("task", {
  employeeId: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  priority: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  completionStatus: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },

  // isOpen: {
  //   type: Sequelize.BOOLEAN,
  //   allowNull: false,
  //   defaultValue: true
  // }
});

module.exports = Task;
