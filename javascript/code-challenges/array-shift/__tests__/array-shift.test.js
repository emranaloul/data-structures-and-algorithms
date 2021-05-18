'use strict';

const fn = require ('../array-shift');

describe('Array shift', () => {
  it('should insert the number in the middle of the array',() => {
    expect(fn([1,2,3,4,5],6)).toStrictEqual([1,2,6,3,4,5]);
  });
});

