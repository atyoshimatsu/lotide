const assertArraysEqual = require('./assertArraysEqual');

const flatten = function(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('The argument is not array');
  }

  return arr.reduce((prv, cur) => Array.isArray(cur) ? [...prv, ...flatten(cur)] : [...prv, cur], []);
};

console.log('flatten tests --');
console.log(assertArraysEqual(flatten([[1, 2], [3, 4], [5], [6]]), [1, 2, 3, 4, 5, 6]));
console.log(assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]));
console.log(assertArraysEqual(flatten([1, 2, [3, 4, [4, 4]], 5, [6]]), [1, 2, 3, 4, 4, 4, 5, 6]));
