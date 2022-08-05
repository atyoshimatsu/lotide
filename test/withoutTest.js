const { assert } = require('chai');
const without = require('../src/without');

describe('without test', () => {
  it('should return undefined for 1, [1]', () => {
    const actual = without(1, [1]);
    assert.isUndefined(actual);
  });

  it('should return [2, 3] for [1, 2, 3, 1], [1]', () => {
    const actual = without([1, 2, 3, 1], [1]);
    const expected = [2, 3];
    assert.deepEqual(actual, expected);
  });

  it('should return [2, 3] for [1, 2, 3], [1, 4]', () => {
    const actual = without([1, 2, 3], [1, 4]);
    const expected = [2, 3];
    assert.deepEqual(actual, expected);
  });

  it('should return [1, 2, 3] for [1, 2, 3], []', () => {
    const actual = without([1, 2, 3], []);
    const expected = [1, 2, 3];
    assert.deepEqual(actual, expected);
  });

  it('should NOT modified original array', () => {
    const original = [1, 2, 3];
    without(original, [2, 3]); // returns [1]
    assert.deepEqual(original, [1, 2, 3]);
  });
});
