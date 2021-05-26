'use strict';

const Node = require('../../../linked-list/linked-list');
const {LinkedList, zipLists} = require('../ll-zip');
const { expect } = require('@jest/globals');

describe('node class Test', () => {
  it('Can successfully zip two linked-list', () => {
    let node1 = new LinkedList;
    let node2 = new LinkedList;
    node1.append('emran');
    node1.append('ahmad');
    node1.append('omar');
    node1.append('muhammad');
    node2.append('sameer');
    node2.append('waleed');
    //assert
    expect(zipLists(node1,node2).toString()).toEqual(' { emran }  ->  { sameer }  ->  { ahmad }  ->  { waleed }  ->  { omar }  ->  { muhammad }  -> NULL');
  });
  it('should retrun an error if the input is not linked-list', () => {

    expect(zipLists('melon','waterMelon').toString()).toEqual('Error, you should insert linked-list only');
  });
  it('should zip both linked lists when both lengths are equal', () => {
    // arrange
    let node1 = new LinkedList;
    let node2 = new LinkedList;
    node1.append('emran');
    node1.append('ahmad');
    node1.append('omar');
    node2.append('muhammad');
    node2.append('sameer');
    node2.append('waleed');
    // act
    // assert
    expect(zipLists(node1,node2).toString()).toEqual(' { emran }  ->  { muhammad }  ->  { ahmad }  ->  { sameer }  ->  { omar }  ->  { waleed }  -> NULL');
  });

});
