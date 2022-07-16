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

const sentence = 'lighthouse in the house';
const result1 = letterPositions(sentence);
console.log(result1);
console.log(assertArraysEqual(result1['h'], [3, 5, 15, 18]));
console.log(assertArraysEqual(result1['e'], [9, 16, 22]));
