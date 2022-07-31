const { assert } = require('chai');
const tail = require('../tail');

describe('tail test', () => {
  it('should return [2, 3] for [1, 2, 3]', () => {
    assert.deepEqual(tail([1 ,2 ,3]), [2, 3]);
  });

  it('should return [] for []]', () => {
    assert.deepEqual(tail([]), []);
  });

  it('should return [] for [1]', () => {
    assert.deepEqual(tail([1]), []);
  });
});
