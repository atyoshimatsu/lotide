const assertEqual = function(actual, expected) {
  const passed = `\u2705 Assertion Passed: [${actual}] === [${expected}]`;
  const failed = `\u{1F534} Assertion Failed: [${actual}] !== [${expected}]`;

  return actual === expected ? passed : failed;
};

console.log('assertEqual tests --');
console.log(assertEqual(0, 0));
console.log(assertEqual(0, null));
console.log(assertEqual(1, undefined));
console.log(assertEqual('test', 'test'));
console.log(assertEqual(true, true));

module.exports = assertEqual;
