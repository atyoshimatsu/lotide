const { assert } = require('chai');
const assertEqual = require('../assertEqual');
const head = require('../head');

describe('head test', () => {
  it('should return 1 for [1, 2, 3]', () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it('should return [1, 2] for [[1, 2], [1, 2, 3]]', () => {
    assert.deepEqual(head([[1, 2], [1, 2, 3]]), [1, 2]);
  });

  it('should return undefined for "test"', () => {
    assert.strictEqual(head('test'), undefined);
  });

  it('should return undefined for []', () => {
    assert.strictEqual(head([]), undefined);
  });
});
