const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const isManager = (id) => employees
  .some((employee) => employee.managers
    .find((employeeid) => employeeid === id) === id);

function getRelatedEmployees(managerId) {
  // seu código aqui
  const subordinado = [];
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  try {
    employees.forEach((person) => {
      if (person.managers.includes(managerId)) {
        subordinado.push(`${person.firstName} ${person.lastName}`);
      }
    });
    return subordinado;
  } catch (err) {
    return err.message;
  }
}

module.exports = { isManager, getRelatedEmployees };
