const assertEqual = function(actual, expected) {
  const passed = `\u2705 Assertion Passed: ${actual} === ${expected}`;
  const failed = `\u{1F534} Assertion Failed: ${actual} !== ${expected}`;

  return actual === expected ? passed : failed;
};

module.exports = assertEqual;
