const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

let managerList = [];
employees.forEach((person) => {
  managerList.push(person.managers);
});
managerList = managerList.reduce((acc, curVal) => acc.concat(curVal));

function isManager(id) {
  // seu código aqui
  const managerStatus = employees.find(
    (employee) =>
      employee.id === managerList.find((managerEntry) => managerEntry === id),
  );
  if (managerStatus) {
    return true;
  }
  return false;
}

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
