'use strict';

const fn = require ('../fibonacci-sequence');

describe('Array shift', () => {
  it('should insert the number in the middle of the array',() => {
    expect(fn(8)).toStrictEqual(21);
    expect(fn('a')).toStrictEqual(0);
    expect(fn('')).toStrictEqual(0);
  });
});

