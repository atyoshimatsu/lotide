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

const middle = function(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('The argument is not Array');
  }

  if ([0, 1, 2].includes(arr.length)) {
    return [];
  }

  const isEven = arr.length % 2 === 0;
  const middleIndex = isEven ? arr.length / 2 - 1 : (arr.length + 1) / 2 - 1;
  return isEven ? [arr[middleIndex], arr[middleIndex + 1]] : [arr[middleIndex]];
};

console.log(assertArraysEqual(middle([]), []));
console.log(assertArraysEqual(middle([0]), []));
console.log(assertArraysEqual(middle([0, 1]), []));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]));
