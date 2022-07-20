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

const takeUntil = function(array, callback) {
  const index = array.map(elm => callback(elm)).findIndex(elm => elm === true);
  return index === -1 ? [] : array.slice(0, index);
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(assertArraysEqual(results1, [1, 2, 5, 7, 2]));

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]));

console.log('---');

const data3 = [',', 'a', 'b'];
const results3 = takeUntil(data3, x => x === ':');
console.log(assertArraysEqual(results3, []));
