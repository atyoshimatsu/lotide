const eqArrays = function(actual, expected) {
  return actual.every((elm, index) => elm === expected[index]);
};

const assertArraysEqual = function(actual, expected) {
  const passed = `\u2705 Assertion Passed: [${actual}] === [${expected}]`;
  const failed = `\u{1F534} Assertion Failed: [${actual}] !== [${expected}]`;

  return eqArrays(actual, expected) ? passed : failed;
};

const without = function(arr, rmv) {
  if (!Array.isArray(arr) || !Array.isArray(rmv)) {
    throw new Error('The argument is not Array');
  }
  return arr.filter(elm => !rmv.includes(elm));
};

console.log(assertArraysEqual(without([1, 2, 3, 1], [1]), [2, 3]));
console.log(assertArraysEqual(without([1, 2, 3], [1, 4]), [2, 3]));
console.log(assertArraysEqual(without([1, 2, 3], []), [1, 2, 3]));
console.log(assertArraysEqual(without(['1', '2', '3'], [1, 2, '3']), ['1', '2']));

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));
