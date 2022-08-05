const head = function(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return;
  }
  return arr[0];
};

module.exports = head;
