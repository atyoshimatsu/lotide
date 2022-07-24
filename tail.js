const eqArrays = function(actual, expected) {
  if (!Array.isArray(actual) || !Array.isArray(expected)) {
    return false;
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

const tail = function(arr) {
  if (arr.length === 0 || arr.length === 1) {
    return [];
  }
  const tailOfArr = [];
  for (let i = 1; i < arr.length; i += 1) {
    tailOfArr.push(arr[i]);
  }
  return tailOfArr;
};

console.log(assertArraysEqual(tail([1 ,2 ,3]), [2, 3]));
console.log(assertArraysEqual(tail([]), []));
console.log(assertArraysEqual(tail([1]), []));
