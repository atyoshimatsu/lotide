const { assert } = require('chai');
const findKey = require('../src/findKey');

describe('findKey test', () => {
  it('should return undefined for a function', () => {
    const actual = findKey(1, x => x.stars === 2);
    assert.isUndefined(actual);
  });

  it('should return undefined for an array', () => {
    const actual = findKey([1], x => x.stars === 2);
    assert.isUndefined(actual);
  });

  it('should return undefined for a function', () => {
    const actual = findKey(() => {}, x => x.stars === 2);
    assert.isUndefined(actual);
  });

  it('should return undefined for "test"', () => {
    const actual = findKey('test', x => x.stars === 2);
    assert.isUndefined(actual);
  });

  it('should return a proper key for given an object and a calllback', () => {
    const stars = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };
    const actual = findKey(stars, x => x.stars === 2);
    assert.strictEqual(actual, 'noma');
  });

  it('should return undefined for no satisfied callback', () => {
    const stars = { "Blue Hill": { stars: 1 } };
    const actual = findKey(stars, x => x.stars === 2);
    assert.isUndefined(actual);
  });
});
