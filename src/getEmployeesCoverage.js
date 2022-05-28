const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const fetchEmployee = (query) => {
  const input = Object.values(query)[0];
  const employee = employees.find((person) => person.firstName === input
  || person.lastName === input
  || person.id === input);
  if (employee) { return employee; }
  if (query) { throw new Error('Informações inválidas'); }
  return undefined;
};

const findSpeciesFromId = (id) => species.find((animal) => animal.id === id).name;
const mapSpeciesFromArray = (arrayOfAnimalIds) => arrayOfAnimalIds.map(findSpeciesFromId);

const findLocationFromId = (id) => species.find((animal) => animal.id === id).location;
const mapLocationFromId = (arrayOfAnimalIds) => arrayOfAnimalIds.map(findLocationFromId);

const makeObject = (query) => {
  const employeeData = fetchEmployee(query);
  if (!employeeData) { return undefined; }
  const queryAnswer = {
    fullName: `${employeeData.firstName} ${employeeData.lastName}`,
    id: `${employeeData.id}`,
    locations: mapLocationFromId(employeeData.responsibleFor),
    species: mapSpeciesFromArray(employeeData.responsibleFor),
  };
  return queryAnswer;
};

const makeArray = () => employees.map(({ firstName }) => makeObject({ name: firstName }));

function getEmployeesCoverage(query = 0) {
  const queryAnswer = makeObject(query);
  try {
    if (queryAnswer) { return queryAnswer; }
    return makeArray();
  } catch (error) { return error.message; }
}

module.exports = getEmployeesCoverage;
