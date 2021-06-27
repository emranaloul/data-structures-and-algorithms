'use strict';

const {HashTable} = require('../hashtable/hashtable');

function repeatedWord(string){
  if((typeof string !== 'string') || (string === null)){
    return 'Please insert only a string!';
  }
  const arrWords=string.toLowerCase().split(/\W+/g);
  let hashTable = new HashTable(arrWords.length);
  for (let i in arrWords){
    if(hashTable.contains(arrWords[i]))
      return arrWords[i];
    else
      hashTable.add(arrWords[i],arrWords[i]);
  }
  return 'No repetition exists.';
}

module.exports = {repeatedWord};
