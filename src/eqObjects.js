const eqObjects = function(obj1, obj2) {
  if (obj1 === undefined || obj2 === undefined) {
    return false;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }

  return keys1.map(key  => {
    if (typeof obj1[key] === 'object') {
      return eqObjects(obj1[key], obj2[key]);
    }
    return obj1[key] === obj2[key];
  }).every(elm => elm === true);
};

module.exports = eqObjects;
