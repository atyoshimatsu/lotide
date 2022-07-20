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


const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    !item ? results.push('') : results.push(callback(item));
  }
  return results;
};

const words1 = ["ground", "control", "to", "major", "tom"];
const results1 = map(words1, word => word[0]);
const words2 = [];
const results2 = map(words2, word => word[0]);
const words3 = [undefined, null];
const results3 = map(words3, word => word[0]);

console.log(assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']));
console.log(assertArraysEqual(results2, []));
console.log(assertArraysEqual(results3, ['', '']));
