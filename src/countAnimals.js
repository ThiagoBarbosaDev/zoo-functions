const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');
// dúvida1 = pq meu linter reclama com a minha arrow function?
// dúvida2 = pq meu reduce comentado na linha 10 nao functiona?

function countAnimals(animal) {
  // seu código aqui
  if (typeof animal !== 'object') {
    // return species.reduce((acc, specie) => { acc[specie.name] = specie.residents.length; }, {});
    const allAnimals = {};
    species.forEach(
      (specie) => allAnimals[specie.name] = specie.residents.length,
    );
    return allAnimals;
  }

  const targetSpecies = species.find((target) => target.name === animal.specie);
  const filtraPorSexo = targetSpecies.residents.filter(
    (anmlSex) => anmlSex.sex === animal.sex,
  );
  if (animal.sex) {
    return filtraPorSexo.length;
  }
  return targetSpecies.residents.length;
}

// console.log(countAnimals({ specie: 'penguins' }))
// console.log(countAnimals({ specie: 'penguins', sex: 'female' }))
// console.log(countAnimals({ specie: 'penguins', sex: 'male' }))
// console.log(countAnimals());

module.exports = countAnimals;
