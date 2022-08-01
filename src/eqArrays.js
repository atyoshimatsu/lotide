const eqArrays = function(actual, expected) {
  if (!Array.isArray(actual) || !Array.isArray(expected)) {
    return false;
  }

  if (actual.length !== expected.length) {
    return false;
  }

  return actual.map((elm, index) => Array.isArray(elm) ? eqArrays(elm, expected[index]) : elm === expected[index])
    .every(elm => elm === true);
};

module.exports = eqArrays;
