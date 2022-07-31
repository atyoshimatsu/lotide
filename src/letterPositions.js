const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i += 1) {
    if (sentence[i] === ' ') {
      continue;
    }

    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }

  return results;
};

console.log('letterPositions tests --');
const sentence = 'lighthouse in the house';
const result1 = letterPositions(sentence);
console.log(result1);
console.log(assertArraysEqual(result1['h'], [3, 5, 15, 18]));
console.log(assertArraysEqual(result1['e'], [9, 16, 22]));
