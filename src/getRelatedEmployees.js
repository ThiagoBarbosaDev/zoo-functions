const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const isManager = (id) => employees
  .some((employee) => employee.managers.includes(id));

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  try {
    const subordinado = [];
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
