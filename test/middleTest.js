const { assert } = require('chai');
const middle = require('../middle');

describe('middle test', () => {
  it('should return [] for []', () => {
    assert.deepEqual(middle([]), []);
  });

  it('should return [0] for []', () => {
    assert.deepEqual(middle([0]), []);
  });

  it('should return [0, 1] for []]', () => {
    assert.deepEqual(middle([0, 1]), []);
  });

  it('should return [1, 2, 3, 4, 5] for [3]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it('should return [1, 2, 3, 4, 5, 6] for [3, 4]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});
