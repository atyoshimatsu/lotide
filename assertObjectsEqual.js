const eqArrays = function(actual, expected) {
  if (!Array.isArray(actual) || !Array.isArray(expected)) {
    return false;
  }

  if (actual.length !== expected.length) {
    return false;
  }

  return actual.every((elm, index) => elm === expected[index]);
};

const eqObjects = function(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }

  return keys1.every(key => Array.isArray(obj1[key])
    ? eqArrays(obj1[key], obj2[key])
    : obj1[key] === obj2[key]);
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  const passed = `\u2705 Assertion Passed: [${inspect(actual)}] === [${inspect(expected)}]`;
  const failed = `\u{1F534} Assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}]`;

  return eqObjects(actual, expected) ? passed : failed;
};

console.log(assertObjectsEqual({ a: 4, b: 5 }, { a: 4, b: 5 }));
console.log(assertObjectsEqual({ a: 4, b: 5 }, { a: 4, b: 6 }));
console.log(assertObjectsEqual({ a: 4, b: [5, 6] }, { a: 4, b: [5, 6] }));
