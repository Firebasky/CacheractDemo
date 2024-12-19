const sayHello = require('../index');

test('returns Hello, world!', () => {
  expect(sayHello()).toBe('Hello, world!');
});
