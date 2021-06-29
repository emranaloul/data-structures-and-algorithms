'use strict';

function leftJoins(leftTable,rightTable) {
  if((leftTable === undefined) || (rightTable === undefined)){
    return 'please insert a hashtable!';
  }
  if((!leftTable.size) || (!rightTable.size)){
    return 'please insert a hashtable!';
  }
  let arr = [];
  let tableOfLeft = leftTable.table;
  for (let i = 0; i <= tableOfLeft.length - 1; i++) {
    if(tableOfLeft[i]){
      let firstKey = Object.keys(tableOfLeft[i].head.value)[0];
      let fistValue = Object.entries(tableOfLeft[i].head.value)[0];
      let result = rightTable.contains(firstKey);
      if(result){
        let rightData = Object.entries(rightTable.getOne(firstKey));
        let secondValue = Object.values(rightData)[0][1];
        arr.push([...fistValue,secondValue]);
      }
      if(!result){
        arr.push([...fistValue,'NULL']);
      }
    }
  }
  return arr;
}

module.exports = {leftJoins};
