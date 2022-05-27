const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const findSpecies = (animalId) => species.find((specie) => specie.id === animalId);

const getOldestFromFirstSpecies = (id) => {
  const oldestAnimal = employees
    .find((person) => person.id === id).responsibleFor
    .map(findSpecies)[0].residents
    .sort((a, b) => b.age - a.age)[0];
  return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
};

module.exports = getOldestFromFirstSpecies;
