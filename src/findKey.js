const findKey = function(object, callback) {
  if (object === null || typeof object !== 'object' || Array.isArray(object) || typeof object === 'function') {
    return;
  }

  const index = Object.values(object).map((value => callback(value))).findIndex(elm => elm === true);
  return index === -1 ? undefined : Object.keys(object)[index];
};

module.exports = findKey;
