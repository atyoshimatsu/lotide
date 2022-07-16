const eqArrays = function(actual, expected) {
  if (!Array.isArray(actual) || !Array.isArray(expected)) {
    false;
  }

  if (actual.length !== expected.length) {
    return false;
  }

  return actual.every((elm, index) => elm === expected[index]);
};

const assertArraysEqual = function(actual, expected) {
  const passed = `\u2705 Assertion Passed: [${actual}] === [${expected}]`;
  const failed = `\u{1F534} Assertion Failed: [${actual}] !== [${expected}]`;

  return eqArrays(actual, expected) ? passed : failed;
};
