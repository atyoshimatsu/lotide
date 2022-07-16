const assertEqual = function(actual, expected) {
  return actual === expected
    ? `\u2705 Assertion Passed: [${actual}] === [${expected}]`
    : `\u{1F534} Assertion Failed: [${actual}] !== [${expected}]`;
};

const head = function (arr) {
  if (arr.length === 0) {
    return undefined;
  }
  return arr[0];
};
