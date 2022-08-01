const eqObjects = require('./eqObjects');
const inspect = require('util').inspect;

const assertObjectsEqual = function(actual, expected) {
  const passed = `\u2705 Assertion Passed: [${inspect(actual)}] === [${inspect(expected)}]`;
  const failed = `\u{1F534} Assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}]`;

  return eqObjects(actual, expected) ? passed : failed;
};

console.log('assertObjectsEqual tests --');
console.log(assertObjectsEqual({ a: 4, b: 5 }, { a: 4, b: 5 }));
console.log(assertObjectsEqual({ a: 4, b: 5 }, { a: 4, b: 6 }));
console.log(assertObjectsEqual({ a: 4, b: [5, 6] }, { a: 4, b: [5, 6] }));

module.exports = assertObjectsEqual;