const eqArrays = function(actual, expected) {
  if (!Array.isArray(actual) || !Array.isArray(expected)) {
    false;
  }

  if (actual.length !== expected.length) {
    return false;
  }

  return actual.every((elm, index) => elm === expected[index]);
};

const assertArraysEqual = function(actual, expected) {
  const passed = `\u2705 Assertion Passed: [${actual}] === [${expected}]`;
  const failed = `\u{1F534} Assertion Failed: [${actual}] !== [${expected}]`;

  return eqArrays(actual, expected) ? passed : failed;
};

const flatten = function(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('The argument is not array');
  }

  return arr.reduce((prv, cur) => Array.isArray(cur) ? [...prv, ...cur] : [...prv, cur], []);
};

console.log(assertArraysEqual(flatten([[1, 2], [3, 4], [5], [6]]), [1, 2, 3, 4, 5, 6]));
console.log(assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]));
