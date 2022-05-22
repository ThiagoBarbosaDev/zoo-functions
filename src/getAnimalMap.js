const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const findSpeciesByLocation = (location) => species.filter((animal) => animal.location
=== location);

const animalMapByResidents = (obj) => (obj.map((animal) => ({
  [animal.name]: animal.residents.map((animal2) => animal2.name),
})));

const mapAnimalsByResidents = {
  NE: (animalMapByResidents(findSpeciesByLocation('NE'))),
  NW: (animalMapByResidents(findSpeciesByLocation('NW'))),
  SE: (animalMapByResidents(findSpeciesByLocation('SE'))),
  SW: (animalMapByResidents(findSpeciesByLocation('SW'))),
};

const animalMapByResidentsSorted = (obj) => (obj.map((animal) => ({
  [animal.name]: animal.residents.map((animal2) => animal2.name).sort(),
})));

const mapAnimalsByResidentsSorted = {
  NE: (animalMapByResidentsSorted(findSpeciesByLocation('NE'))),
  NW: (animalMapByResidentsSorted(findSpeciesByLocation('NW'))),
  SE: (animalMapByResidentsSorted(findSpeciesByLocation('SE'))),
  SW: (animalMapByResidentsSorted(findSpeciesByLocation('SW'))),
};

const getArrayOfAnimal = (local) => (findSpeciesByLocation(local).map((animal) => animal.name));

const animalMapSpecies = {
  NE: getArrayOfAnimal('NE'),
  NW: getArrayOfAnimal('NW'),
  SE: getArrayOfAnimal('SE'),
  SW: getArrayOfAnimal('SW'),
};

const filterBySex = (obj, sex) => (obj.map((animal) => ({
  [animal.name]: animal.residents.filter((animal2) => animal2.sex === sex)
    .map((animal2) => animal2.name),
})));

const filterBySexObj = (sex) => ({
  NE: (filterBySex(findSpeciesByLocation('NE'), sex)),
  NW: (filterBySex(findSpeciesByLocation('NW'), sex)),
  SE: (filterBySex(findSpeciesByLocation('SE'), sex)),
  SW: (filterBySex(findSpeciesByLocation('SW'), sex)),
});

// console.log(filterBySexObj('male'))

const filterBySexSorted = (obj, sex) => (obj.map((animal) => ({
  [animal.name]: animal.residents.filter((animal2) => animal2.sex === sex)
    .map((animal2) => animal2.name).sort(),
})));

const filterBySexSortedObj = (sex) => ({
  NE: (filterBySexSorted(findSpeciesByLocation('NE'), sex)),
  NW: (filterBySexSorted(findSpeciesByLocation('NW'), sex)),
  SE: (filterBySexSorted(findSpeciesByLocation('SE'), sex)),
  SW: (filterBySexSorted(findSpeciesByLocation('SW'), sex)),
});

console.log(filterBySexSortedObj('female').NE);

const isParamValid = (options) => {
  if (Object.keys(options).length === 0) { return true; }
  return false;
};

const isEmpty = (options = {}) => !options.includeNames || isParamValid(options);

const areAllTrue = (options) => options.includeNames && options.sex && options.sorted;

function getAnimalMap(options = {}) {
  // seu código aqui
  console.log(options);
  if (isEmpty(options)) { console.log('FFF ou TFF'); return animalMapSpecies; }
  if (areAllTrue(options)) { console.log('TTT'); return filterBySexSortedObj(options.sex); }
  if (options.sex) { console.log('TTF'); return filterBySexObj(options.sex); }
  if (options.sorted) { console.log('TFT'); return mapAnimalsByResidentsSorted; }
  return mapAnimalsByResidents; // (TFF)
  // return options;
}
// console.log(Object.values(animalMapSpecies))
// console.log(getAnimalMap());
// console.log(animalMapSpecies); caso {}

// console.log(getAnimalMap({ sex: 'female' }));
// console.log(mapAnimalsByResidents.NE); //caso {sex: 'female}

// console.log(mapAnimalsByResidentsSorted.NE)
// console.log(getAnimalMap({ includeNames: true, sorted: true }));

// console.log(getAnimalMap({ includeNames: true }));
// console.log(getAnimalMap({ sorted: true, sex: 'female' }));
// console.log(getAnimalMap({ includeNames: true, sex: 'female' }));
// console.log(getAnimalMap({ includeNames: true, sex: 'female', sorted: true }));

module.exports = getAnimalMap;
