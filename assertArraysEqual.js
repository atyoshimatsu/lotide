const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  const passed = `\u2705 Assertion Passed: [${actual}] === [${expected}]`;
  const failed = `\u{1F534} Assertion Failed: [${actual}] !== [${expected}]`;

  return eqArrays(actual, expected) ? passed : failed;
};

console.log('assertArraysEqual tests --');
console.log(assertArraysEqual([], []));
console.log(assertArraysEqual([1, 2, 3], [2, 3]));
console.log(assertArraysEqual([1, [2, 3, [4]]], [1, [2, 3, [4]]]));

module.exports = assertArraysEqual;
