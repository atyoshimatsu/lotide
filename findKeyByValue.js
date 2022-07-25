const assertEqual = require('./assertEqual');

const findKeyByValue = function(obj, value) {
  for (const key of Object.keys(obj)) {
    if (obj[key] === value) {
      return key;
    }
  }
  return undefined;
};

console.log('findKeyByValue tests --');
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));
