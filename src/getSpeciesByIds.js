const data = require('../data/zoo_data');

function getSpeciesByIds(...args) {
  // seu código aqui
  return args.map((animalId) => species.find(({ id }) => id === animalId));
}

module.exports = getSpeciesByIds;
