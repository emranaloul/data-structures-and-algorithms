'use strict';

const arrayTest = require ('../code-challenge-class-02/array-shift/array-shift.js');

describe('Array shift', () => {
  it('should insert the number in the middle of the array',() => {
    expect(arrayTest.fn([1,2,3,4,5],6)).toStrictEqual([1,2,3,6,4,5]);
  });
});

