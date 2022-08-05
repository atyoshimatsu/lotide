const { assert } = require('chai');
const map = require('../src/map');

describe('map test', () => {
  it('should return undefined for 1', () => {
    const actual = map(1);
    assert.isUndefined(actual);
  });

  it('should return proper array for given array and callback', () => {
    const actual = map(['ground', 'control', 'to', 'major', 'tom'], word => word[0]);
    const expected = ['g', 'c', 't', 'm', 't'];
    assert.deepEqual(actual, expected);
  });
});
