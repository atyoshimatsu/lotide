const map = (array, callback) => {
  if (!Array.isArray(array)) {
    return undefined;
  }

  const results = [];
  for (const item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;
