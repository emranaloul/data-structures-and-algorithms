'use strict';

const Node = require('../../../../../javascript/linked-list/linked-list');
const LinkedList = require('../ll-kth-from-end.js');
const { expect } = require('@jest/globals');

describe('node class Test', () => {
  it('should create new  Node object', () => {
    // arrange
    let value = 8;
    // act
    let node = new Node(value);
    // assert
    expect(node.value).toEqual(8);
    expect(node.next).toEqual(null);
  });
});
describe('Linked list Test', () => {
  it('Return the length of the linked list', () => {
    let node = new LinkedList;
    node.append('emran');
    node.append('ahmad');

    expect(node.llLength()).toEqual(2);
  });
  it('Throw an error when k is greater than the length of the linked list', () => {
    // arrange
    let node = new LinkedList;
    node.append('emran');
    node.append('ahmad');

    // act
    // assert
    expect(() => node.kthFromEnd(3)).toThrow('The number is bigger than the length of the linked list');
  });
  it('Throw an error When k and the length of the list are the same', () => {
    // arrange
    let node = new LinkedList;
    node.append('emran');
    node.append('ahmad');

    // act
    // assert
    expect(() => node.kthFromEnd(3)).toThrow('The number is bigger than the length of the linked list');
  });
  it('Throw an error when k is not a positive integer', () => {
    // arrange
    let node = new LinkedList;
    node.append('emran');
    node.append('ahmad');

    // act
    // assert
    expect(() => node.kthFromEnd(-1)).toThrow(`negative number not accepted`);
  });
  it('When the linked list is of a size 1', () => {
    // arrange
    let node = new LinkedList;
    node.append(1);
    // act
    // assert
    expect(node.kthFromEnd(0)).toEqual(1);
  });
  it('Happy Path" where k is not at the end, but somewhere in the middle of the linked list', () => {
    // arrange
    let node = new LinkedList;
    node.append('emran');
    node.append('ahmad');
    // act
    // assert
    expect(node.kthFromEnd(1)).toEqual('emran');
  });
});
