const { assert } = require('chai');
const eqObjects = require('../src/eqObjects');

describe('eqObjects test', () => {
  it('should return false if passed undefined', () => {
    const result = eqObjects(undefined, { a: "1", b: "2" });
    assert.isFalse(result);
  });

  it('should return true for { a: "1", b: "2" }, { b: "2", a: "1" }', () => {
    const result = eqObjects({ a: "1", b: "2" }, { b: "2", a: "1" });
    assert.isTrue(result);
  });

  it('should return false for { a: "1", b: "2" }, { a: "1", b: "2", c: "3" }', () => {
    const result = eqObjects({ a: "1", b: "2" }, { a: "1", b: "2", c: "3" });
    assert.isFalse(result);
  });

  it('should return false for { a: "1", b: "2", c: "3" }, { a: "1", b: "2", d: "3" }', () => {
    const result = eqObjects({ a: "1", b: "2", c: "3" }, { a: "1", b: "2", d: "3" });
    assert.isFalse(result);
  });

  it('should return true passed for { c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" }', () => {
    const result = eqObjects({ c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" });
    assert.isTrue(result);
  });

  it('should return false passed for { c: "1", d: ["2", 3] }, { c: "1", d: ["2", 3, 4] }', () => {
    const result = eqObjects({ c: "1", d: ["2", 3] }, { c: "1", d: ["2", 3, 4] });
    assert.isFalse(result);
  });

  it('should return true passed for { a: 1, b: {c: 2, e: { f: 5 }, d: { e: 4 } } }, { a: 1, b: {c: 2, e: { f: 5 }, d: { e: 4 } } }', () => {
    const result = eqObjects({ a: 1, b: {c: 2, e: { f: 5 }, d: { e: 4 } } }, { a: 1, b: {c: 2, e: { f: 5 }, d: { e: 4 } } });
    assert.isTrue(result);
  });

  it(`Should return false if comparing:
        x = {
          'number': 2,
          'name': 'Tragedy',
          'array': [1,3,5,7],
          'obj': {a:{b:{c:{d:{e:{f:{condition: 'poor'}}}}}}}
        }

        const z = {
          'obj': {f:{e:{d:{c:{b:{a:{condition: 'poor'}}}}}}} ,
          'number': 2,
          'name': 'Tragedy',
          'array': [1,3,5,7]
        }
        `, () => {

    const x = {
      'number': 2,
      'name': 'Tragedy',
      'array': [1,3,5,7],
      'obj': {a:{b:{c:{d:{e:{f:{condition: 'poor'}}}}}}}
    };

    const z = {
      'obj': {f:{e:{d:{c:{b:{a:{condition: 'poor'}}}}}}} ,
      'number': 2,
      'name': 'Tragedy',
      'array': [1,3,5,7]
    };

    assert.isFalse(eqObjects(x,z));
  });
});
