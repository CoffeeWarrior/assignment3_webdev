const { Employee, Task } = require("../models");

const seedDB = async () => {
  const dummyEmployee = await Employee.create({
    firstname: "Melissa",
    lastname: "Lynch",
    department: "Computer Science",
    id: "1",
  });
  const dummyEmployee2 = await Employee.create({
    firstname: "Kim",
    lastname: "Kardashian",
    id: "2",
  });

  const dummyTask = await Task.create({
    description: " Teach CSCI 39548",
    priority: "high",
    completionStatus: false,
    employeeId: "1",
  });

  await dummyTask.setEmployee(dummyEmployee);
};

module.exports = seedDB;
