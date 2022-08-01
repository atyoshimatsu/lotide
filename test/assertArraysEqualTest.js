const { assert } = require('chai');
const assertArraysEqual = require('../src/assertArraysEqual');

describe('assertArraysEqual test', () => {
  it('should return passed for [], []', () => {
    const passed = '\u2705 Assertion Passed: [] === []';
    assert.strictEqual(assertArraysEqual([], []), passed);
  });

  it('should return failed for [1, 2, 3], [2, 3]', () => {
    const failed = `\u{1F534} Assertion Failed: [ 1, 2, 3 ] !== [ 2, 3 ]`;
    assert.strictEqual(assertArraysEqual([1, 2, 3], [2, 3]), failed);
  });

  it('should return passed for [1, [2, 3, [4]]], [1, [2, 3, [4]]]', () => {
    const passed = `\u2705 Assertion Passed: [ 1, [ 2, 3, [ 4 ] ] ] === [ 1, [ 2, 3, [ 4 ] ] ]`;
    assert.strictEqual(assertArraysEqual([1, [2, 3, [4]]], [1, [2, 3, [4]]]), passed);
  });
});
