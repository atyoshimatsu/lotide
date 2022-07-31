const assertEqual = require('./assertEqual');

const findKey = function(object, callback) {
  const index = Object.values(object).map((value => callback(value))).findIndex(elm => elm === true);
  return index === -1 ? undefined : Object.keys(object)[index];
};

console.log('findKey tests --');
const result1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);

console.log(assertEqual(result1, 'noma'));

const result2 = findKey({ "Blue Hill": { stars: 1 } }, x => x.stars === 2);

console.log(assertEqual(result2, undefined));
