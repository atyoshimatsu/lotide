const takeUntil = function(array, callback) {
  const index = array.map(elm => callback(elm)).findIndex(elm => elm === true);
  return index === -1 ? array : array.slice(0, index);
};

module.exports = takeUntil;
