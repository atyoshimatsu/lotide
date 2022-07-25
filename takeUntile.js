const assertArraysEqual = require('./assertArraysEqual');

const takeUntil = function(array, callback) {
  const index = array.map(elm => callback(elm)).findIndex(elm => elm === true);
  return index === -1 ? array : array.slice(0, index);
};

console.log('takeUntil tests --');
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(assertArraysEqual(results1, [1, 2, 5, 7, 2]));

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]));

const data3 = [',', 'a', 'b'];
const results3 = takeUntil(data3, x => x === ':');
console.log(assertArraysEqual(results3, [',', 'a', 'b']));
