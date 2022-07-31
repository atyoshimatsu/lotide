const assertArraysEqual = require('./assertArraysEqual');

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

module.exports = tail;
