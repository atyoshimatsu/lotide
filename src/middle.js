const middle = function(arr) {
  if (!Array.isArray(arr)) {
    return undefined;
  }

  if ([0, 1, 2].includes(arr.length)) {
    return [];
  }

  const isEven = arr.length % 2 === 0;
  const middleIndex = isEven ? arr.length / 2 - 1 : (arr.length + 1) / 2 - 1;
  return isEven ? [arr[middleIndex], arr[middleIndex + 1]] : [arr[middleIndex]];
};

module.exports = middle;
