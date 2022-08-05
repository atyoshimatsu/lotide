const { assert } = require('chai');
const takeUntil = require('../src/takeUntil');

describe('takeUntil test', () => {
  it('should return undefined for 1', () => {
    const actual = takeUntil(1, n => n < 0);
    assert.isUndefined(actual);
  });

  it('should return proper array for given callback', () => {
    const actual = takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], n => n < 0);
    const expected = [1, 2, 5, 7, 2];
    assert.deepEqual(actual, expected);
  });

  it('should return given array if not satisfy callback', () => {
    const actual = takeUntil([',', 'a', 'b'], x => x ===  'c');
    const expected = [',', 'a', 'b'];
    assert.deepEqual(actual, expected);
  });
});
