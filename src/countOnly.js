const countOnly = function(allItems, itemsToCount) {
  if (!Array.isArray(allItems)) {
    return;
  }

  const results = {};
  const items = allItems.filter(item => itemsToCount[item]);

  for (const item of items) {
    if (results[item]) {
      results[item] += 1;
    } else {
      results[item] = 1;
    }
  }

  return results;
};

module.exports = countOnly;
