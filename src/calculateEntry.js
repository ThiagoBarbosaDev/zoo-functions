const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const isParamEmpty = (entrants) => {
  if (entrants === 0 || Object.values(entrants).length === 0) { return true; }
};

function countEntrants(entrants = 0) {
  // seu código aqui
  if (isParamEmpty(entrants)) { return 0; }
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
  if (Object.values(entrants).length === 0) { return 0; }
  const guests = countEntrants(entrants);
  const childFare = guests.child * prices.child;
  const adultFare = guests.adult * prices.adult;
  const seniorFare = guests.senior * prices.senior;
  return childFare + adultFare + seniorFare;
}

console.log(
  calculateEntry(),
);

module.exports = { calculateEntry, countEntrants };
