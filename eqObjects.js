const eqObjects = function(obj1, obj2) {
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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

const abd = { a: "1", b: "2", d: "3" };
console.log(eqObjects(abc, abd)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false

const nestedObject1 = { a: 1, b: {c: 2, e: { f: 5 }, d: { e: 4 } } };
const nestedObject2 = { a: 1, b: {c: 2, d: { e: 4 }, e: { f: 5 } } };
console.log(eqObjects(nestedObject1, nestedObject2)); // => true
