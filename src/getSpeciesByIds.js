const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getSpeciesByIds = (...args) => args
  .map((animalId) => species
    .find(({ id }) => id === animalId));

module.exports = getSpeciesByIds;
