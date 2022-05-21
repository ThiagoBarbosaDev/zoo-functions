const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const validateParameter = (query) => {
  if (typeof query === 'object') { return Object.values(query)[0]; }
  return 'empty param';
};

const findInputData = (query) => {
  // const input = Object.values(query)[0];
  const input = validateParameter(query);
  const firstName = employees.find((employee) => employee.firstName === input);
  const lastName = employees.find((employee) => employee.lastName === input);
  const employeeId = employees.find((employee) => employee.id === input);
  const exception = 'exception';

  // console.log(firstName, lastName, employeeId, typeof query, input)

  if (firstName) { return firstName; }
  if (lastName) { return lastName; }
  if (employeeId) { return employeeId; }
  if (typeof query === 'object') { throw new Error('Informações inválidas'); }
  return exception;
};
// console.log(findInputData());

// console.log(findInputData({id: 'c1f50212-35a6-4ecd-8223-f835538526c2'}))
// console.log(findInputData({name: 'manbearpig'}))
// console.log(findInputData({name: 'Ardith'}))
// console.log(findInputData({name: 'Azevado'}))

const findSpeciesFromId = (id) => species.find((animal) => animal.id === id).name;
const mapSpeciesFromArray = (arrayOfAnimalIds) => arrayOfAnimalIds.map(findSpeciesFromId);

const findLocationFromId = (id) => species.find((animal) => animal.id === id).location;
const mapLocationFromId = (arrayOfAnimalIds) => arrayOfAnimalIds.map(findLocationFromId);

const findEmployeeDataFromName = (query) => employees.find((person) => person.firstName === query);
// console.log(findEmployeeDataFromName('Nigel'));

const constructObj = (input) => {
  const employeeData = findInputData(input);
  if (employeeData === 'exception') { return undefined; }
  return {
    fullName: `${employeeData.firstName} ${employeeData.lastName}`,
    id: `${employeeData.id}`,
    locations: mapLocationFromId(employeeData.responsibleFor),
    species: mapSpeciesFromArray(employeeData.responsibleFor),
  };
};

const constructObjAll = (input) => {
  const employeeData = findEmployeeDataFromName(input);
  const objeto = {
    fullName: `${employeeData.firstName} ${employeeData.lastName}`,
    id: `${employeeData.id}`,
    locations: mapLocationFromId(employeeData.responsibleFor),
    species: mapSpeciesFromArray(employeeData.responsibleFor),
  };
  return objeto;
};
// console.log(constructObj({id: 'c1f50212-35a6-4ecd-8223-f835538526c2'}));
// console.log(constructObj({name: 'Ardith'}));
// console.log(constructObj({name: 'Azevado'}));

const exceptionHandler = (exception) => {
  const allEmployees = employees.map((employee) => employee.firstName).map(constructObjAll);
  return allEmployees;
};

// console.log(exceptionHandler());

function getEmployeesCoverage(query) {
  // seu código aqui
  const queryAnswer = constructObj(query);
  try {
    if (queryAnswer === undefined) { return exceptionHandler(); }
    return queryAnswer;
  } catch (error) { return error.message; }
}

// console.log(getEmployeesCoverage({name: 'manbearpig'}))
// console.log(getEmployeesCoverage({name: 'Sharonda'}))
// console.log(getEmployeesCoverage({name: 'Spry'}))
// console.log(getEmployeesCoverage({id: 'c1f50212-35a6-4ecd-8223-f835538526c2'}))
console.log(getEmployeesCoverage());

module.exports = getEmployeesCoverage;
