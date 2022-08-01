const { assert } = require('chai');
const countLetters = require('../src/countLetters');

describe('countLetters test', () => {
  it('should return {} for ""', () => {
    const actual = countLetters('');
    assert.deepEqual(actual, {});
  });

  it('should return { t: 2, e: 1, s: 1 } for "test"', () => {
    const actual = countLetters('test');
    assert.deepEqual(actual, { t: 2, e: 1, s: 1 });
  });
});
