const findKeyByValue = function(obj, value) {
  if (obj === null || typeof obj !== 'object' || Array.isArray(obj) || typeof obj === 'function') {
    return;
  }

  for (const key in obj) {
    if (obj[key] === value) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;
