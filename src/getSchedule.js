const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// expected output: 12
const functionamento = {
  Monday: {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  },
  Tuesday: {
    officeHour: `Open from ${hours.Tuesday.open}am until ${hours.Tuesday.close}pm`,
    exhibition: species
      .filter((unit) => unit.availability.includes('Tuesday'))
      .map((ele) => ele.name),
  },
  Wednesday: {
    officeHour: `Open from ${hours.Wednesday.open}am until ${hours.Wednesday.close}pm`,
    exhibition: species
      .filter((unit) => unit.availability.includes('Wednesday'))
      .map((ele) => ele.name),
  },
  Thursday: {
    officeHour: `Open from ${hours.Thursday.open}am until ${hours.Thursday.close}pm`,
    exhibition: species
      .filter((unit) => unit.availability.includes('Thursday'))
      .map((ele) => ele.name),
  },
  Friday: {
    officeHour: `Open from ${hours.Friday.open}am until ${hours.Friday.close}pm`,
    exhibition: species
      .filter((unit) => unit.availability.includes('Friday'))
      .map((ele) => ele.name),
  },
  Saturday: {
    officeHour: `Open from ${hours.Saturday.open}am until ${hours.Saturday.close}pm`,
    exhibition: species
      .filter((unit) => unit.availability.includes('Saturday'))
      .map((ele) => ele.name),
  },
  Sunday: {
    officeHour: `Open from ${hours.Sunday.open}am until ${hours.Sunday.close}pm`,
    exhibition: species
      .filter((unit) => unit.availability.includes('Sunday'))
      .map((ele) => ele.name),
  },
};

const isAnimal = (scheduleTarget) => {
  const animal = species.find((unit) => unit.name === scheduleTarget);
  if (!animal) {
    return false;
  }
  return animal;
};

const isDay = (scheduleTarget) => {
  const day = Object.keys(hours).find(
    (dayOfTheWeek) => dayOfTheWeek === scheduleTarget,
  );

  if (!day) {
    return false;
  }
  return day;
};

// const handleDay = (scheduleTarget) => {
//   const dia = isDay(scheduleTarget);
//   if (dia === 'Monday' && dia) { return functionamento.Monday; }
//   if (dia) { return functionamento[dia]; }
// };

// const ifDay = handleDay(scheduleTarget);
function getSchedule(scheduleTarget) {
  // seu código aqui
  const animal = isAnimal(scheduleTarget);
  const dia = isDay(scheduleTarget);
  if (dia === 'Monday') {
    return { Monday: {
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!',
    } };
  }
  if (animal) { return animal.availability; }
  if (dia) {
    return { [dia]: {
      officeHour: `Open from ${hours[dia].open}am until ${hours[dia].close}pm`,
      exhibition: species.filter((unit) =>
        unit.availability.includes(dia)).map((ele) => ele.name),
    } };
  }
  return functionamento;
}
// if (dia) { return ifDay; }
// console.log(getSchedule('Monday'));
// console.log(getSchedule('Wednesday'));
// console.log(getSchedule('lions'));
// console.log(getSchedule('manbearpig'));
// console.log(getSchedule('Mufasaday'));

module.exports = getSchedule;
