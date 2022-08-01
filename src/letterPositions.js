const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i += 1) {
    if (sentence[i] === ' ') {
      continue;
    }

    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }

  return results;
};

module.exports = letterPositions;
