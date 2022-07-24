const assertEqual = function(actual, expected) {
  const passed = `\u2705 Assertion Passed: [${actual}] === [${expected}]`;
  const failed = `\u{1F534} Assertion Failed: [${actual}] !== [${expected}]`;

  return actual === expected ? passed : failed;
};

const head = function(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return undefined;
  }
  return arr[0];
};

console.log(assertEqual(head([1, 2, 3]), 1));
console.log(assertEqual(head([[1, 2], [1, 2, 3]]), [1, 2]));
console.log(assertEqual(head('test'), undefined));
console.log(assertEqual(head([]), undefined));
