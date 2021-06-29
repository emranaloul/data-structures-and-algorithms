'use strict';
const { HashTable } = require('../../hashtable/hashtable');
const { leftJoins } = require('../hashmap-left-join');

describe('Left JOINs Test', () => {
  it('should merge Hashleft table with right Hashtable', () => {
    let leftHashTable = new HashTable(105);
    leftHashTable.add('partick', 'viera');
    leftHashTable.add('thierry', 'henry');
    leftHashTable.add('lionel', 'messi');
    leftHashTable.add('Xavi', 'Hernandez');
    let rightHashTable = new HashTable(105);
    rightHashTable.add('thierry', 'larson');
    rightHashTable.add('lionel', 'villa');
    rightHashTable.add('Xavi', 'luis');
    rightHashTable.add('gilberto', 'alex');
    expect(leftJoins(leftHashTable, rightHashTable)).toEqual( [['lionel', 'messi', 'villa'], ['thierry', 'henry', 'larson'], ['Xavi', 'Hernandez', 'luis'], ['partick', 'viera', 'NULL']]);
    expect(leftJoins(rightHashTable, leftHashTable)).toEqual( [['lionel', 'villa', 'messi'], ['thierry', 'larson', 'henry'], ['gilberto', 'alex', 'NULL'], ['Xavi', 'luis', 'Hernandez']]);
  });
  it('should return an error message if any of the inputs is a non hashTable', () => {
    expect(leftJoins(1, 'string')).toEqual('please insert a hashtable!');
  });
  it('should return an error message if any of the inputs is a non hashTable', () => {
    expect(leftJoins(1, 'string')).toEqual('please insert a hashtable!');
  });
});
