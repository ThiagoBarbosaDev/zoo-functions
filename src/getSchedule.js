const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// expected output: 12

const daysTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const findAnimalAvailability = (dia) => species
  .filter((specie) => specie.availability.includes(dia))
  .map((ele) => ele.name);

const closedDays = { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };
const openDays = daysTheWeek.slice(1).reduce((acc, day) => ({
  ...acc,
  [day]: {
    officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
    exhibition: findAnimalAvailability(day),
  },
}), {});

const functionamento = { ...closedDays, ...openDays };

const isAnimal = (scheduleTarget) => {
  const animal = species.find((unit) => unit.name === scheduleTarget);
  if (!animal) { return false; }
  return animal;
};

const isDay = (scheduleTarget) => {
  const day = Object
    .keys(hours)
    .find((dayOfTheWeek) => dayOfTheWeek === scheduleTarget);
  if (!day) { return false; }
  return day;
};

function getSchedule(scheduleTarget) {
  const animal = isAnimal(scheduleTarget);
  const dia = isDay(scheduleTarget);
  if (dia === 'Monday') { return closedDays; }
  if (animal) { return animal.availability; }
  if (dia) {
    return { [dia]: openDays[dia] };
  }
  return functionamento;
}

module.exports = getSchedule;
