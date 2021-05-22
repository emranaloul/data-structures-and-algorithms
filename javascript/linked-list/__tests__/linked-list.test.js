'use strict';

const Node = require('../linked-list');
const LinkedList = require('../index.js');
const { expect } = require('@jest/globals');

describe('node class Test', () => {
  it('should create new object', () => {
    // arrange
    let value = 5;
    // act
    let node = new Node(value);
    // assert
    expect(node.value).toEqual(5);
    expect(node.next).toEqual(null);
  });
  it('should add new item to empty linked list', () => {
    //arrange
    let ll = new LinkedList();
    let value = 5;
    //act
    ll.add(value);
    //assert
    expect(ll.head.value).toEqual(value);
    expect(ll.head.next).toBeNull();
  });
  it('should add new item to not empty linked list', () => {
    //arrange
    let ll = new LinkedList();
    ll.add(5);
    let newValue = 10;
    //act
    ll.add(newValue);
    //assert
    expect(ll.head.next.value).toEqual(newValue);
    expect(ll.head.next.next).toBeNull();
  });

  it('should change the head value', () => {
    //arrange
    let ll = new LinkedList();
    ll.add(5);
    let newValue = 10;
    //act
    ll.insert(newValue);
    //assert
    expect(ll.head.value.value).toEqual(newValue);
  });
  it('should change head value', () => {
    //arrange
    let ll = new LinkedList();
    ll.add(1);
    ll.add(2);
    ll.add(3);
    //act
    ll.include(2);
    ll.include(4);
    //assert
    expect(ll.include(2)).toEqual(true);
    expect(ll.include(4)).toEqual(false);
  });
  it('should return linked list as a string', () => {
    //arrange
    let ll = new LinkedList();
    ll.add(1);
    ll.add(2);
    ll.add(3);
    ll.add(4);
    ll.add(5);
    //act
    ll.toString();
    //assert
    expect(ll.toString()).toEqual(` { 1 }  ->  { 2 }  ->  { 3 }  ->  { 4 }  ->  { 5 }  -> NULL`);
  });
});
