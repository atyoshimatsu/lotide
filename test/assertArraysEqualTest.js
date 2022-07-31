const assertArraysEqual = require('../assertArraysEqual');

console.log('\nassertArraysEqual tests --');
console.log(assertArraysEqual([], []));
console.log(assertArraysEqual([1, 2, 3], [2, 3]));
console.log(assertArraysEqual([1, [2, 3, [4]]], [1, [2, 3, [4]]]));
