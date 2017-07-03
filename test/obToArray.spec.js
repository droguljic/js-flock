const expect = require('chai').expect;
const castArray = require('../src/obToArray');


describe('castArray', () => {
  it('Should return array if array', () => {
    expect(castArray([])).to.eql([]);
    expect(castArray([1, 2, 3])).to.eql([1, 2, 3]);
  });

  it('Should cast array if object', () => {
    expect(castArray({ })).to.eql([{ }]);
    expect(castArray({ a: 1 })).to.eql([{ a: 1 }]);
  });

  it('Should return empty array if not object or array', () => {
    expect(castArray(1)).to.eql([]);
    expect(castArray('string')).to.eql([]);
    expect(castArray(false)).to.eql([]);
    expect(castArray(null)).to.eql([]);
    expect(castArray(undefined)).to.eql([]);
    expect(castArray(new Set([1, 2, 3]))).to.eql([]);
    expect(castArray(new Map([[1, 2]]))).to.eql([]);
    expect(castArray(Symbol('test'))).to.eql([]);
  });
});
