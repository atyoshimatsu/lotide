const assertEqual = require('./assertEqual');

const countLetters = function(str) {
  const result = {};
  for (const char of str.replaceAll(' ', '')) {
    if (result[char]) {
      result[char] += 1;
    } else {
      result[char] = 1;
    }
  }
  return result;
};

console.log('countLetters tests --');
const string = 'lighthouse in the house';
const result1 = countLetters(string);
console.log(assertEqual(result1['o'], 2));
console.log(assertEqual(result1['e'], 3));
console.log(assertEqual(result1[' '], undefined));
