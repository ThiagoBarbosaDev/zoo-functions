const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const bicho = species.find((especie) => especie.name === animal);
  return bicho.residents.every((individuo) => individuo.age >= age);
  // seu código aqui
}

module.exports = getAnimalsOlderThan;
