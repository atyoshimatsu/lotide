const { assert } = require('chai');
const findKeyByValue = require('../src/findKeyByValue');

describe('findKeyByValue test', () => {
  const bestTVShowsByGenre = {
    sciFi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };

  it('should return undefined for a function', () => {
    const actual = findKeyByValue(1, 'The Wire');
    assert.isUndefined(actual);
  });

  it('should return undefined for an array', () => {
    const actual = findKeyByValue([1], 'The Wire');
    assert.isUndefined(actual);
  });

  it('should return undefined for a function', () => {
    const actual = findKeyByValue(() => {}, 'The Wire');
    assert.isUndefined(actual);
  });

  it('should return undefined for "test"', () => {
    const actual = findKeyByValue('test', 'The Wire');
    assert.isUndefined(actual);
  });

  it('should return a proper key for given an object and a value', () => {
    const actual = findKeyByValue(bestTVShowsByGenre, 'The Wire');
    assert.strictEqual(actual, 'drama');
  });

  it('should return undefined for not existing value', () => {
    const actual = findKeyByValue(bestTVShowsByGenre, "The '70s show");
    assert.isUndefined(actual);
  });
});
