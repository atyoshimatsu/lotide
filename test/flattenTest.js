const { assert } = require('chai');
const flatten = require('../src/flatten');

describe('flatten test', () => {
  it('should return [] for []', () => {
    const actual = flatten([]);
    assert.deepEqual(actual, []);
  });

  it('should return undefined for "test"', () => {
    const actual = flatten('test');
    assert.isUndefined(actual);
  });

  it('should return [1, 2, 3, 4, 5, 6] for [[1, 2], [3, 4], [5], [6]]', () => {
    const actual = flatten([[1, 2], [3, 4], [5], [6]]);
    assert.deepEqual(actual, [1, 2, 3, 4, 5, 6]);
  });

  it('should return [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]', () => {
    const actual = flatten([1, 2, [3, 4], 5, [6]]);
    assert.deepEqual(actual, [1, 2, 3, 4, 5, 6]);
  });

  it('should return [1, 2, 3, 4, 4, 4, 5, 6] for [1, 2, [3, 4, [4, 4]], 5, [6]]', () => {
    const actual = flatten([1, 2, [3, 4, [4, 4]], 5, [6]]);
    assert.deepEqual(actual, [1, 2, 3, 4, 4, 4, 5, 6]);
  });
});
