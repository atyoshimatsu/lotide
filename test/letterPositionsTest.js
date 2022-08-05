const { assert } = require('chai');
const letterPositions = require('../src/letterPositions');

describe('letterPositions test', () => {
  it('should return undefined for 1', () => {
    const actual = letterPositions(1);
    assert.isUndefined(actual);
  });

  it('should return {} for ""', () => {
    const actual = letterPositions('');
    assert.deepEqual(actual, {});
  });

  it('should return proper object for given string', () => {
    const actual = letterPositions('test sample');
    const expected = {t: [0, 3], e: [1, 10], s: [2, 5], a:[6], m: [7], p: [8], l: [9]};
    assert.deepEqual(actual, expected);
  });
});
