const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const locations = ['NE', 'NW', 'SE', 'SW'];
const findSpeciesByLocation = (location) => species
  .filter((animal) => animal.location === location);

const returnAnimalNames = (location) => findSpeciesByLocation(location)
  .map((animal) => animal.name);

let mapSpeciesObj = {};

locations.forEach((location) => {
  mapSpeciesObj = { ...mapSpeciesObj, [location]: returnAnimalNames(location) };
  return mapSpeciesObj;
});

const mapResidents = (location) => findSpeciesByLocation(location)
  .map((animal) => ({ [animal.name]: animal.residents.map((resident) => resident.name) }));

let mapResidentsObj = {};

locations.forEach((location) => {
  mapResidentsObj = { ...mapResidentsObj, [location]: mapResidents(location) };
  return mapResidentsObj;
});

let mapResidentsSortedObj = {};

const mapResidentsSorted = (location) => findSpeciesByLocation(location)
  .map((animal) => ({ [animal.name]: animal.residents.map((resident) => resident.name).sort() }));

locations.forEach((location) => {
  mapResidentsSortedObj = { ...mapResidentsSortedObj, [location]: mapResidentsSorted(location) };
  return mapResidentsSortedObj;
});

let mapResidentsSex = {};

const filterBySexInnerFunction = (obj, sex) => obj.residents
  .filter(((resident) => resident.sex === sex))
  .map((resident) => resident.name);

const mapResidentsSexObj = (location, sex) => findSpeciesByLocation(location)
  .map((animal) => ({ [animal.name]: filterBySexInnerFunction(animal, sex) }));

const filterBySex2 = (sex) => {
  locations.forEach((location) => {
    mapResidentsSex = { ...mapResidentsSex, [location]: mapResidentsSexObj(location, sex) };
    return mapResidentsSex;
  });
};

let mapResidentsSexSortedObj = {};

const filterBySexSortedInnerFunction = (obj, sex) => obj.residents
  .filter(((resident) => resident.sex === sex)).map((resident) => resident.name).sort();

const mapResidentsSortedSexObj = (location, sex) => findSpeciesByLocation(location)
  .map((animal) => ({ [animal.name]: filterBySexSortedInnerFunction(animal, sex) }));

const filterBySexSorted2 = (sex) => {
  locations.forEach((location) => {
    mapResidentsSexSortedObj = {
      ...mapResidentsSexSortedObj, [location]: mapResidentsSortedSexObj(location, sex),
    };
    return mapResidentsSexSortedObj;
  });
};

const isParamValid = (options) => {
  if (Object.keys(options).length === 0) { return true; }
  return false;
};

const isEmpty = (options = {}) => !options.includeNames || isParamValid(options);

const areAllTrue = (options) => options.includeNames && options.sex && options.sorted;

function getAnimalMap(options = {}) {
  // seu código aqui
  console.log(options);
  if (isEmpty(options)) { console.log('FFF ou TFF'); return mapSpeciesObj; }
  if (areAllTrue(options)) {
    console.log('TTT'); filterBySexSorted2(options.sex);
    return mapResidentsSexSortedObj;
  }
  if (options.sex) { console.log('TTF'); filterBySex2(options.sex); return mapResidentsSex; }
  if (options.sorted) { console.log('TFT'); return mapResidentsSortedObj; }
  return mapResidentsObj; // (TFF)
}

module.exports = getAnimalMap;
