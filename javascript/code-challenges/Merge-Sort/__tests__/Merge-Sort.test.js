'use strict';

const {mergeSort} = require('../Merge-Sort');

describe('merge sort testing ', ()=>{
  it('should sort array using merge sort function', ()=>{
    let array = [8,4,23,42,16,15];

    expect(mergeSort(array)).toEqual([ 4, 8, 15, 16, 23, 42 ]);

  });
  it('should return error message if the insertion is not an array', ()=>{
    let s = 'emran';

    expect(mergeSort(s)).toEqual('Please Insert An Array');
  });
});
