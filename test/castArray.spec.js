const expect = require('chai').expect;
const castArray = require('../src/castArray');


describe('castArray', () => {
  let ob;
  let emptyArr;
  let arr;
  let set;
  let map;

  beforeEach(() => {
    ob = { a: 1 };
    emptyArr = [];
    arr = [1, 2, 3];
    set = new Set(arr);
    map = new Map([[1, 1], [2, 2]]);
  });

  it('Should return array if array', () => {
    expect(castArray(emptyArr)).to.eql(emptyArr);
    expect(castArray(arr)).to.eql(arr);
  });

  it('Should cast array if not array', () => {
    expect(castArray(1)).to.eql([1]);
    expect(castArray('string')).to.eql(['string']);
    expect(castArray({ })).to.eql([{ }]);
    expect(castArray(ob)).to.eql([ob]);
    expect(castArray(false)).to.eql([false]);
    expect(castArray(null)).to.eql([null]);
    expect(castArray(undefined)).to.eql([undefined]);
  });

  it('Should preserve only objects when casting', () => {
    expect(castArray(1, { objectMode: true })).to.eql([]);
    expect(castArray('string', { objectMode: true })).to.eql([]);
    expect(castArray({ }, { objectMode: true })).to.eql([{ }]);
    expect(castArray(ob, { objectMode: true })).to.eql([ob]);
    expect(castArray(false, { objectMode: true })).to.eql([]);
    expect(castArray(null, { objectMode: true })).to.eql([]);
    expect(castArray(undefined, { objectMode: true })).to.eql([]);
  });

  it('Should cast Set to array', () => {
    expect(castArray(set)).to.eql(arr);
  });
});
