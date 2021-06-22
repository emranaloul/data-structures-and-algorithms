const {quickSort} = require('../quick-sort');


describe('merge sort testing ', ()=>{
  it('should sort array using merge sort function', ()=>{
    let array = [8,4,23,42,16,15];

    expect(quickSort(array,0,5)).toEqual([ 4, 8, 15, 16, 23, 42 ]);

  });
  it('should return error message if the insertion is not an array', ()=>{
    let s = 'emran';

    expect(quickSort(s)).toEqual('Please Insert An Array');
  });
});
