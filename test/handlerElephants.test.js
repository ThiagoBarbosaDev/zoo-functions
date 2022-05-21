const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {});
it('Verifica se getElephants existe e é uma função', () =>
  expect(typeof handlerElephants).toBe('function'));
it('Verifica se retorna undefined se receber undefined como parametro', () =>
  expect(handlerElephants()).toBe(undefined));
it('Verifica se retorna uma string com o erro "Parâmetro inválido(...)" quando o parametro passadora for uma string', () => {
  const error = 'Parâmetro inválido, é necessário uma string';
  expect(handlerElephants(9)).toBe(error);
  expect(handlerElephants([9])).toBe(error);
  expect(handlerElephants({ a: 9 })).toBe(error);
  expect(handlerElephants(handlerElephants)).toBe(error);
  expect(handlerElephants('hamburger')).toBe(null);
});
it('Verifica se retorna os parâmetros válidos padrões', () => {
  expect(handlerElephants('count')).toBe(4);
  expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  expect(handlerElephants('averageAge')).toBe(10.5);
});
it('Verifica se retorna os parâmetros válido excepcionais', () => {
  expect(handlerElephants('id')).toBe('bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5');
});
