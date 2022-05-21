const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Testa se é uma função', () => {
    expect(typeof getOpeningHours).toBe('function');
  });
  it('Testa se ao não passa nenhum parâmetro retorna todos os horários', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
  it('Testa se retorna que o zoológico está fechado nos horário apropriados', () => {
    expect(getOpeningHours('Monday', '2:23-PM')).toBe('The zoo is closed');
    expect(getOpeningHours('Tuesday', '2:23-AM')).toBe('The zoo is closed');
  });
  it('Testa se retorna que o zoológico está aberto nos horário apropriados', () => {
    expect(getOpeningHours('Wednesday', '2:23-PM')).toBe('The zoo is open');
    expect(getOpeningHours('Tuesday', '8:23-AM')).toBe('The zoo is open');
  });
  it('Testa se a função está pegando os errors apropriados', () => {
    expect(() => getOpeningHours('Tuesday', '2:50-XM')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
    expect(() => getOpeningHours('Tuesday', 'a:50-PM')).toThrow('The hour should represent a number');
    expect(() => getOpeningHours('Tuesday', '2:69-PM')).toThrow('The minutes must be between 0 and 59');
    expect(() => getOpeningHours('Tuesday', '69:00-PM')).toThrow('The hour must be between 0 and 12');
    expect(() => getOpeningHours('Mufasaday', '2:30-PM')).toThrow('The day must be valid. Example: Monday');
  });
});
