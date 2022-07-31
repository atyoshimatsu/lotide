const assertArraysEqual = require('../assertArraysEqual');
const tail = require('../tail');

console.log('\ntail tests --');
console.log(assertArraysEqual(tail([1 ,2 ,3]), [2, 3]));
console.log(assertArraysEqual(tail([]), []));
console.log(assertArraysEqual(tail([1]), []));
