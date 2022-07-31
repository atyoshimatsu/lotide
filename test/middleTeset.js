const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

console.log('\nmiddle tests --');
console.log(assertArraysEqual(middle([]), []));
console.log(assertArraysEqual(middle([0]), []));
console.log(assertArraysEqual(middle([0, 1]), []));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]));
