const eqArrays = require('../eqArrays');

console.log('eqArrays tests --');
console.log(eqArrays([[2, 3], [4], 6], [[2, 3], [4], 6])); // => true
console.log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]])); // => false
console.log(eqArrays([[2, 3], [4]], [[2, 3], 4])); // => false;
console.log(eqArrays(1, 1)); // => false;
