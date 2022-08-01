const { assert } = require('chai');
const assertObjectsEqual = require('../src/assertObjectsEqual');

describe('assertObjectsEqual test', () => {
  it('should return passed for { a: 4, b: 5 }, { a: 4, b: 5 }', () => {
    const passed = '\u2705 Assertion Passed: { a: 4, b: 5 } === { a: 4, b: 5 }';
    assert.strictEqual(assertObjectsEqual({ a: 4, b: 5 }, { a: 4, b: 5 }), passed);
  });

  it('should return passed for { a: 4, b: 5 }, { a: 4, b: 6 }', () => {
    const failed = '\u{1F534} Assertion Failed: { a: 4, b: 5 } !== { a: 4, b: 6 }';
    assert.strictEqual(assertObjectsEqual({ a: 4, b: 5 }, { a: 4, b: 6 }), failed);
  });

  it('should return passed for { a: 4, b: [5, 6] }, { a: 4, b: [5, 6] }', () => {
    const passed = '\u2705 Assertion Passed: { a: 4, b: [ 5, 6 ] } === { a: 4, b: [ 5, 6 ] }';
    assert.strictEqual(assertObjectsEqual({ a: 4, b: [5, 6] }, { a: 4, b: [5, 6] }), passed);
  });
});
