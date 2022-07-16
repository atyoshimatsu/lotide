const assertEqual = function(actual, expected) {
  return actual === expected
    ? `\u2705 Assertion Passed: [${actual}] === [${expected}]`
    : `\u{1F534} Assertion Failed: [${actual}] !== [${expected}]`;
};
