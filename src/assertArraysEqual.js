const eqArrays = require('./eqArrays');
const inspect = require('util').inspect;

const assertArraysEqual = function(actual, expected) {
  const passed = `\u2705 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
  const failed = `\u{1F534} Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;

  return eqArrays(actual, expected) ? passed : failed;
};

module.exports = assertArraysEqual;
