import ErrorRepository from '../app';

const errorRepo = new ErrorRepository();

test('class "ErrorRepository" exists', () => {
  expect(errorRepo).toBeDefined();
});

test('class "ErrorRepository" has the "errors" property with Map object', () => {
  expect(errorRepo.errors).toBeDefined();
  expect(errorRepo.errors instanceof Map).toBeTruthy();
});

test('Known error code', () => {
  expect(errorRepo.translate(404)).toBe('Not Found');
});

test('Unknown error code', () => {
  expect(errorRepo.translate(601)).toBe('Unknown error');
});
