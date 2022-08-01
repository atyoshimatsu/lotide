const flatten = function(arr) {
  if (!Array.isArray(arr)) {
    return;
  }

  return arr.reduce((prv, cur) => Array.isArray(cur) ? [...prv, ...flatten(cur)] : [...prv, cur], []);
};

module.exports = flatten;
