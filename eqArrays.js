const eqArrays = function(actual, expected) {
  if (!Array.isArray(actual) || !Array.isArray(expected)) {
    throw new Error('The argument is not Array');
  }

  return actual.every((elm, index) => elm === expected[index]);
};
