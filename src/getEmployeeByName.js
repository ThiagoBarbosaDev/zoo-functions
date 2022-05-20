const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  const empregado = employees.find((employee) => employee.firstName === employeeName
  || employee.lastName === employeeName);
  if (empregado) { return empregado; }
  return {};
}

module.exports = getEmployeeByName;
