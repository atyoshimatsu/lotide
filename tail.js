const assertEqual = function(actual, expected) {
  return actual === expected
    ? `\u2705 Assertion Passed: [${actual}] === [${expected}]`
    : `\u{1F534} Assertion Failed: [${actual}] !== [${expected}]`;
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

console.log(assertEqual(tail([]), []));
console.log(assertEqual(tail([1]), []));
console.log(assertEqual(tail([1 ,2, 3]), [2, 3]));
