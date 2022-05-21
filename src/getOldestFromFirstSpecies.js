const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const findSpecies = (animalId) => species.find((specie) => specie.id === animalId);
// console.log(findSpecies('0938aa23-f153-4937-9f88-4858b24d6bce'))

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const animalList = employees.find((person) => person.id === id).responsibleFor;
  const arrayOfAnimalObjects = animalList.map(findSpecies).map((unit) => unit.residents);
  const oldestAnimalObj = arrayOfAnimalObjects[0].reduce((acc, curVal) =>
    (curVal.age > acc.age ? curVal : acc));
  const oldestAnimalArray = [oldestAnimalObj.name, oldestAnimalObj.sex, oldestAnimalObj.age];
  return oldestAnimalArray;
}

// console.log(getOldestFromFirstSpecies("c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1"))
//  Expected: ["Maxwell", "male", 15]
module.exports = getOldestFromFirstSpecies;
