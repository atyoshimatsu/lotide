const eqArrays = function(actual, expected) {
  const passed = `\u2705 Assertion Passed: [${actual}] === [${expected}]`;
  const failed = `\u{1F534} Assertion Failed: [${actual}] !== [${expected}]`;

  const result = actual.every((elm, index) => elm === expected[index]);

  return result ? passed : failed;
};
