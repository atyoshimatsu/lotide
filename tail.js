const eqArrays = function(actual, expected) {
  if (!Array.isArray(actual) || !Array.isArray(expected)) {
    throw new Error('The argument is not Array');
  }

  return actual.every((elm, index) => elm === expected[index]);
};

const assertArraysEqual = function(actual, expected) {
  const passed = `\u2705 Assertion Passed: [${actual}] === [${expected}]`;
  const failed = `\u{1F534} Assertion Failed: [${actual}] !== [${expected}]`;

  return eqArrays(actual, expected) ? passed : failed;
};

const tail = function(arr) {
  if (arr.length === 0 || arr.length === 1) {
    return [];
  }
  const newArr = [];
  for (let i = 1; i < arr.length; i += 1) {
    newArr.push(arr[i]);
  }
  return newArr;
};
