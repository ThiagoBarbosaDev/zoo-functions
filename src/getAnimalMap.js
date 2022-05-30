const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const locations = ['NE', 'NW', 'SE', 'SW'];
const findSpeciesByLocation = (location) => species
  .filter((animal) => animal.location === location);

const generateMap = (callback) => locations
  .reduce((acc, cur) => ({ ...acc, [cur]: callback(cur) }), {});

const returnAnimalNames = (location) => findSpeciesByLocation(location)
  .map((animal) => animal.name);
const speciesMap = generateMap(returnAnimalNames);

const mapResidentsSorted = (location) => findSpeciesByLocation(location)
  .map((animal) => ({ [animal.name]: animal.residents.map((resident) => resident.name).sort() }));
const sortedMap = generateMap(mapResidentsSorted);

const mapResidents = (location) => findSpeciesByLocation(location)
  .map((animal) => ({ [animal.name]: animal.residents.map((resident) => resident.name) }));
const genericMap = generateMap(mapResidents);

const sexFilter = (obj, sex) => obj.residents
  .filter(((resident) => resident.sex === sex))
  .map((resident) => resident.name);
const mapResidentsSexObj = (location, sex) => findSpeciesByLocation(location)
  .map((animal) => ({ [animal.name]: sexFilter(animal, sex) }));
const filterSex = (sex) => locations
  .reduce((acc, cur) => ({ ...acc, [cur]: mapResidentsSexObj(cur, sex) }), {});

const filterBySexSortedInnerFunction = (obj, sex) => obj.residents
  .filter(((resident) => resident.sex === sex)).map((resident) => resident.name).sort();
const mapResidentsSortedSexObj = (location, sex) => findSpeciesByLocation(location)
  .map((animal) => ({ [animal.name]: filterBySexSortedInnerFunction(animal, sex) }));
const filterSexSorted = (sex) => locations
  .reduce((acc, cur) => ({ ...acc, [cur]: mapResidentsSortedSexObj(cur, sex) }), {});

const isParamInvalid = (options) => {
  if (!Object.keys(options).length) { return true; }
  return false;
};

const isEmpty = (options = {}) => !options.includeNames || isParamInvalid(options);

const areAllTrue = (options) => options.includeNames && options.sex && options.sorted;

function getAnimalMap(options = {}) {
  if (isEmpty(options)) { return speciesMap; }
  if (areAllTrue(options)) { return filterSexSorted(options.sex); }
  if (options.sex) { return filterSex(options.sex); }
  if (options.sorted) { return sortedMap; }
  return genericMap;
}

module.exports = getAnimalMap;
