const assertEqual = require('../assertEqual');
const head = require('../head');

console.log('head tests --');
console.log(assertEqual(head([1, 2, 3]), 1));
console.log(assertEqual(head([[1, 2], [1, 2, 3]]), [1, 2]));
console.log(assertEqual(head('test'), undefined));
console.log(assertEqual(head([]), undefined));
