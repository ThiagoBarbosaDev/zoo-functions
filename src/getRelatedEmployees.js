const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// let managerList = [];
// employees
//   .forEach((person) => managerList.push(person.managers))
//   .reduce((acc, curVal) => acc.concat(curVal));

// function isManager(id) {
//   // seu código aqui
//   const managerStatus = employees.find(
//     (employee) =>
//       employee.id === managerList.find((managerEntry) => managerEntry === id),
//   );
//   if (managerStatus) {
//     return true;
//   }
//   return false;
// }
const isManager = (id) => employees
  .some((employee) => employee.managers
    .find((employeeid) => employeeid === id) === id);

console.log(isManager('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

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
