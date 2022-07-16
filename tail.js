const assertEqual = function(actual, expected) {
  const passed = `\u2705 Assertion Passed: [${actual}] === [${expected}]`;
  const failed = `\u{1F534} Assertion Failed: [${actual}] !== [${expected}]`;

  if (Array.isArray(actual)) {
    return actual.every((elm, index) => elm === expected[index]) ? passed : failed;
  }

  return actual === expected ? passed : failed;
};

const tail = function(arr) {
  if (arr.length === 0 || arr.length === 1) {
    return [];
  }
  const newArr = [];
  for (let i = 1; i < arr.length; i += 1) {
    newArr.push(arr[i]);
  }
  return newArr;
};
