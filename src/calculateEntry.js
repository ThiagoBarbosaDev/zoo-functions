const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const isParamEmpty = (entrants) => {
  if (entrants === 0 || Object.values(entrants).length === 0) { return true; }
};

function countEntrants(entrants = 0) {
  // seu código aqui
  if (isParamEmpty(entrants)) { return 0; }
  const entrantsCollection = { child: 0, adult: 0, senior: 0 };
  entrants.forEach((person) => {
    if (person.age < 18) {
      entrantsCollection.child += 1;
    } else if (person.age > 49) {
      entrantsCollection.senior += 1;
    } else {
      entrantsCollection.adult += 1;
    }
  });
  return entrantsCollection;
}
// console.log(countEntrants());
// console.log(countEntrants({}));

// console.log(
//   countEntrants([
//     { age: 5, name: 'Nicolas Barros' },
//     { age: 5, name: 'Rafaela Silva' },
//     { age: 5, name: 'Warley Barros' },
//     { age: 18, name: 'Dra. Júlia Reis' },
//     { age: 18, name: 'Esther Reis' },
//     { age: 50, name: 'Heitor Costa' },
//   ]),
// );

function calculateEntry(entrants = 0) {
  // seu código aqui
  if (Object.values(entrants).length === 0) { return 0; }
  const guests = countEntrants(entrants);
  return (guests.child * prices.child) + (guests.adult * prices.adult)
  + (guests.senior * prices.senior);
}

console.log(
  calculateEntry(),
);

module.exports = { calculateEntry, countEntrants };
