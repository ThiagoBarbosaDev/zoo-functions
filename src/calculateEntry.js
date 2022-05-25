const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const isParamEmpty = (entrants) => {
  if (!entrants || !Object.values(entrants).length) { return true; }
};

function countEntrants(entrants = 0) {
  // seu código aqui
  const entrantsCollection = { child: 0, adult: 0, senior: 0 };
  entrants.forEach(({ age }) => {
    if (age < 18) {
      entrantsCollection.child += 1;
    } else if (age > 49) {
      entrantsCollection.senior += 1;
    } else {
      entrantsCollection.adult += 1;
    }
  });
  return entrantsCollection;
}

function calculateEntry(entrants = 0) {
  // seu código aqui
  if (isParamEmpty(entrants)) { return 0; }
  const { child, adult, senior } = countEntrants(entrants);
  const childFare = child * prices.child;
  const adultFare = adult * prices.adult;
  const seniorFare = senior * prices.senior;
  return childFare + adultFare + seniorFare;
}

console.log(
  calculateEntry(),
);

module.exports = { calculateEntry, countEntrants };
