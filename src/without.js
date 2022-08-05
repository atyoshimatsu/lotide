const without = function(arr, rmv) {
  if (!Array.isArray(arr) || !Array.isArray(rmv)) {
    return undefined;
  }
  return arr.filter(elm => !rmv.includes(elm));
};

module.exports = without;
