const assertEqual = function(actual, expected) {
  const passed = `\u2705 Assertion Passed: [${actual}] === [${expected}]`;
  const failed = `\u{1F534} Assertion Failed: [${actual}] !== [${expected}]`;

  const result = Array.isArray(actual)
    ? actual.every((elm, index) => elm === expected[index])
    : actual === expected;

  return result ? passed : failed;
};

const head = function(arr) {
  if (arr.length === 0) {
    return undefined;
  }
  return arr[0];
};
