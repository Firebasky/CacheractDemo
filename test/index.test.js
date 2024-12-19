const sayHello = require('../src/index');

test('returns Hello, world!', () => {
  expect(sayHello()).toBe('Hello, world!');
});
