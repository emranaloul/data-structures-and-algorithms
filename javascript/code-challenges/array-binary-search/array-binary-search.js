function binarySearch(arr,num){
  let val = false;
  let idx = -1;
  for (let i in arr){
    if(arr[i] === num){
      idx = i;
      val = true;
      return idx;
    }}
  if (!val)
    return idx;
}
module.exports = binarySearch;

