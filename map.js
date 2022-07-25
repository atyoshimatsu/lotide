const assertArraysEqual = require('./assertArraysEqual');

const map = (array, callback) => {
  const results = [];
  for (const item of array) {
    results.push(callback(item));
  }
  return results;
};

console.log('map tests --');

const words1 = ["ground", "control", "to", "major", "tom"];
const results1 = map(words1, word => word[0]);
const words2 = [];
const results2 = map(words2, word => word[0]);
const words3 = [undefined, null, 1, true];
const results3 = map(words3, word => !word ? undefined : word[0]);

console.log(assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']));
console.log(assertArraysEqual(results2, []));
console.log(assertArraysEqual(results3, ['', '', '', '']));
