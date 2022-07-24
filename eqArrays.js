const eqArrays = function(actual, expected) {
  if (!Array.isArray(actual) || !Array.isArray(expected)) {
    return false;
  }

  if (actual.length !== expected.length) {
    return false;
  }

  return actual.map((elm, index) => {
    if (Array.isArray(elm)) {
      return eqArrays(elm, expected[index]);
    }
    return elm === expected[index];
  }).every(elm => elm === true);
};

console.log(eqArrays([[2, 3], [4], 6], [[2, 3], [4], 6])); // => true
console.log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]])); // => false
console.log(eqArrays([[2, 3], [4]], [[2, 3], 4])); // => false;
console.log(eqArrays(1, 1)); // => false;
