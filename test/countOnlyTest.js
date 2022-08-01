const { assert } = require('chai');
const countOnly = require('../src/countOnly');

describe('countOnly test', () => {
  it('should return {} for []', () => {
    const actual = countOnly([]);
    assert.deepEqual(actual, {});
  });

  it('should return a proper object for an given arrays', () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const actual = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    assert.deepEqual(actual, { 'Jason': 1, 'Fang': 2 });
  });
});
