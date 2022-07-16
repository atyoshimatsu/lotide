const assertEqual = function(actual, expected) {
  const passed = `\u2705 Assertion Passed: [${actual}] === [${expected}]`;
  const failed = `\u{1F534} Assertion Failed: [${actual}] !== [${expected}]`;

  return actual === expected ? passed : failed;
};

const head = function(arr) {
  if (arr.length === 0) {
    return undefined;
  }
  return arr[0];
};