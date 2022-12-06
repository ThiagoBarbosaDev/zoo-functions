const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const findAnimal = (animal) => species.find((specie) => specie.name === animal.specie);

const filterBySex = (obj, animal) => obj.residents
  .filter((resident) => resident.sex === animal.sex).length;

const handleEmptyParam = () => species
  .reduce((acc, specie) => ({ ...acc, [specie.name]: specie.residents.length }), {});

const countAnimals = (animal = 0) => {
  if (!animal) { return handleEmptyParam(); }
  const specieObj = findAnimal(animal);
  const filteredBySex = filterBySex(specieObj, animal);
  if (animal.sex) { return filteredBySex; }
  const residentSum = specieObj.residents.length;
  return residentSum;
};

module.exports = countAnimals;
