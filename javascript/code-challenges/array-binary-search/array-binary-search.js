function binarySearch(arr, num){
  let initial = 0;
  let last = arr.length - 1;
  while (initial <= last) {
    let i = Math.floor((initial + last) / 2);
    if (arr[i] === num) {
      return i;
    } else if (arr[i] < num) {
      initial = i + 1;
    } else {
      last = i - 1;
    }
  }
  return -1;
}

module.exports = binarySearch;

