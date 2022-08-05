const countLetters = function(str) {
  const result = {};
  for (const char of str.split(' ').join('')) {
    if (result[char]) {
      result[char] += 1;
    } else {
      result[char] = 1;
    }
  }
  return result;
};

module.exports = countLetters;
