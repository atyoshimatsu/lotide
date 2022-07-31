const { assert } = require('chai');
const middle = require('../src/middle');

describe('middle test', () => {
  it('should return [] for []', () => {
    assert.deepEqual(middle([]), []);
  });

  it('should return [] for [0]', () => {
    assert.deepEqual(middle([0]), []);
  });

  it('should return [] for [0, 1]]', () => {
    assert.deepEqual(middle([0, 1]), []);
  });

  it('should return [3] for [1, 2, 3, 4, 5]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it('should return [3, 4] for [1 ,2, 3, 4, 5, 6]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});
