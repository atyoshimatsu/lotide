const { assert } = require('chai');
const assertEqual = require('../assertEqual');

describe('assertEqual test', () => {
  it('should return passed for 0 and 0', () => {
    const passed = '\u2705 Assertion Passed: 0 === 0';
    assert.deepEqual(assertEqual(0, 0), passed);
  });

  it('should return failed for 0 and null', () => {
    const failed = `\u{1F534} Assertion Failed: 0 !== null`;
    assert.deepEqual(assertEqual(0, null), failed);
  });

  it('should return failed for 1 and undefined]', () => {
    const failed = `\u{1F534} Assertion Failed: 1 !== undefined`;
    assert.deepEqual(assertEqual(1, undefined), failed);
  });

  it('should return passed for "test" and "test"', () => {
    const passed = '\u2705 Assertion Passed: test === test';
    assert.deepEqual(assertEqual('test', 'test'), passed);
  });

  it('should return passed for true and true', () => {
    const passed = '\u2705 Assertion Passed: true === true';
    assert.deepEqual(assertEqual(true, true), passed);
  });
});
