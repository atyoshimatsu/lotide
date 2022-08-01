const { assert } = require('chai');
const eqObjects = require('../src/eqObjects');
const countLetters = require('../src/countLetters');

describe('countLetters test', () => {
  it('should return {} for ""', () => {
    const actual = countLetters('');
    assert.isTrue(eqObjects(actual, {}));
  });

  it('should return { t: 2, e: 1, s: 1 } for "test"', () => {
    const actual = countLetters('test');
    assert.isTrue(eqObjects(actual, { t: 2, e: 1, s: 1 }));
  });
});
