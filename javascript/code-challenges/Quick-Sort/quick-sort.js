'use strict';

let quickSort = (arr, left, right)=>{
  if(typeof arr === 'string' || typeof arr === 'number'){
    return 'Please Insert An Array';
  }
  if(left<right){
    let position = partition(arr, left, right);
    quickSort(arr, left, position - 1);
    quickSort(arr, position + 1, right);
  }
  return arr;
};
let partition = (arr, left, right)=>{
  let pivot = arr[right];
  let low = left -1;
  for(let i = left; i < right; i++){
    if(arr[i] <= pivot){
      low++;
      swap(arr, i, low);
    }
  }
  swap(arr, right, low + 1);
  return low + 1;
};

let swap = (arr,i,low)=>{
  let temp;
  temp = arr[i];
  arr[i] = arr[low];
  arr[low] = temp;
};

module.exports = {quickSort};
