'use strict';

const {HashTable} = require('../hashtable');


describe('HashTable',() => {
  let hashTable;
  beforeAll(() => {
    hashTable = new HashTable(1021);
    hashTable.add('lulu','cat');

  });
  it('Adding a key/value to your hashtable results in the value being in the data structure',() => {

    expect(hashTable.contains('lulu')).toEqual(true);
  });
  it('Retrieving based on a key returns the value stored',() => {

    expect(hashTable.get('lulu')).toEqual([{'lulu': 'cat'}]);
  });
  it('Successfully returns null for a key that does not exist in the hashtable',() => {

    expect(hashTable.get('sally')).toEqual(null);
  });
  it('Successfully handle a collision within the hashtable',() => {
    let hashTable = new HashTable (1021);
    hashTable.add('mero','cat');
    hashTable.add('remo','bird');
    expect(hashTable.get('mero')).toEqual([{'mero': 'cat'}, {'remo': 'bird'}]);
  });
  it('Successfully retrieve a value from a bucket within the hashtable that has a collision',() => {
    let hashTable = new HashTable (1021);
    hashTable.add('mero','cat');
    hashTable.add('remo','bird');
    expect(hashTable.getOne('remo')).toEqual({'remo':'bird'});
  });
  it('Successfully hash a key to an in-range value',() => {
    let hashTable = new HashTable (1021);
    expect(hashTable.hash('remo')).toEqual(210);
  });
});
