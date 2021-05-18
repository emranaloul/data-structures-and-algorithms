'use strict';

const fn = require ('../array-binary-search');

describe('Array Binary Search', () => {
  it('must return the index of the insetred number',() => {
    expect(fn([1,2,3,4,5],2)).toStrictEqual('1');
  });
});

