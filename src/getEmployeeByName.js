const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName = 0) => {
  if (!employeeName) { return {}; }
  const empregado = employees
    .find((employee) => employee.firstName === employeeName || employee.lastName === employeeName);
  return empregado;
};

module.exports = getEmployeeByName;
