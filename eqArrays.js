const eqArrays = function(actual, expected) {
  return actual.every((elm, index) => elm === expected[index]);
};
