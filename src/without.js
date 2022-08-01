const without = function(arr, rmv) {
  if (!Array.isArray(arr) || !Array.isArray(rmv)) {
    throw new Error('The argument is not Array');
  }
  return arr.filter(elm => !rmv.includes(elm));
};

module.exports = without;
