'use strict';

function insertShiftArray (array,num){
  let arr = [];
  let mid = Number.parseInt(arr.length/2);
  for (let i = 0; i<=array.length-1; i++){
    if(i === mid){
      arr.push(num);
      arr.push(array[i]);
    }
    else
      arr.push(array[i]);
  }

  return arr;
};

module.exports = function insertShiftArray (array,num){
    return true
} ;


git