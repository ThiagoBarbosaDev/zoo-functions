const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => species
  .find((especie) => especie.name === animal).residents
  .every((individuo) => individuo.age >= age);

module.exports = getAnimalsOlderThan;
