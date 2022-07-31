const { assert } = require('chai');
const eqArrays = require('../eqArrays');

describe('eqArrays test', () => {
  it('should return true for [[2, 3], [4], 6], [[2, 3], [4], 6]', () => {
    assert.isTrue(eqArrays([[2, 3], [4], 6], [[2, 3], [4], 6]));
  });

  it('should return false for [[2, 3], [4]], [[2, 3], [4, 5]]', () => {
   assert.isFalse(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]));
  });

  it('should false for [[2, 3], [4]], [[2, 3], 4]]', () => {
    assert.isFalse(eqArrays([[2, 3], [4]], [[2, 3], 4]));
  });

  it('should false passed for 1, 1', () => {
    assert.isFalse(eqArrays(1, 1));
  });
});
