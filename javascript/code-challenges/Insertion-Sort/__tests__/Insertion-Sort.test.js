const {insertionSort} = require('../Insertion-Sort');


describe('insertion sort testing', ()=>{
  it('should sort the array ascending', ()=>{
    let array = [8,4,23,42,16,15];

    expect(insertionSort(array)).toEqual([ 4, 8, 15, 16, 23, 42 ]);
  });
});
