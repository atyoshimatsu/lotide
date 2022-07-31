const assertEqual = require('../assertEqual');

console.log('assertEqual tests --');
console.log(assertEqual(0, 0));
console.log(assertEqual(0, null));
console.log(assertEqual(1, undefined));
console.log(assertEqual('test', 'test'));
console.log(assertEqual(true, true));
