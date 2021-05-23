'use strict';

const Node = require('../../../../../javascript/linked-list/linked-list');
const LinkedList = require('../ll-insertions');
const { expect } = require('@jest/globals');

describe('node class Test', () => {
  it('should create new Node object', () => {
    // arrange
    let value = 7;
    // act
    let node = new Node(value);
    // assert
    expect(node.value).toEqual(7);
    expect(node.next).toEqual(null);
  });
});
describe('Linked list class test', () => {
  it('Can successfully add a node to the end of the linked list',() => {
    //arrange
    let test = new LinkedList;
    //act
    test.append(2);
    test.append(3);
    //assert
    expect(test).toEqual({"head": {"next": {"next": null, "value": 3}, "value": 2}});
  });
  it('Can successfully add multiple nodes to the end of a linked list', () => {
    //arrange
    let test = new LinkedList();
    //act
    test.append(11);
    test.append(22);
    test.append(33);
    test.append(44);
    test.append(55);
    //assert
    expect(test).toEqual({"head": {"next": {"next": {"next": {"next": {"next": null, "value": 55}, "value": 44}, "value": 33}, "value": 22}, "value": 11}});
  });
  it('Can successfully insert a node before a node located i the middle of a linked list', () => {
    //arrange
    let test = new LinkedList();
    test.append(17);
    test.append(28);
    test.append(35);
    test.append(42);
    //act
    test.insertBefore(35,51);
    //assert
    expect(test).toEqual({"head": {"next": {"next": {"next": {"next": {"next": null, "value": 42}, "value": 35}, "value": 51}, "value": 28}, "value": 17}});
  });
  it('Can successfully insert a node before the first node of a linked list', () =>{
    //arrange
    let test = new LinkedList;
    test.append(15);
    test.append(25);
    test.append(36);
    test.append(47);
    //act
    test.insertBefore(15,58);
    //assert
    expect(test).toEqual({"head": {"next": {"next": {"next": {"next": {"next": null, "value": 47}, "value": 36}, "value": 25}, "value": 15}, "value": 58}});
  });
  it('Can successfully insert after a node in the middle of the linked list', () => {
    //arrange
    let test = new LinkedList();
    test.append('emran');
    test.append('muhammad');
    test.append('khaled');
    test.append('ahmad');
    //act
    test.insertAfter('khaled','waleed');
    //assert
    expect(test).toEqual({"head": {"next": {"next": {"next": {"next": {"next": null, "value": 'ahmad'}, "value": 'waleed'}, "value": 'khaled'}, "value": 'muhammad'}, "value": 'emran'}}
    );
  });
  it('Can successfully insert a node after the last node of the linked list', () => {
    //arrange
    let test = new LinkedList();
    test.append('horse');
    test.append('cat');
    test.append('dog');
    test.append('rabbit');
    //act
    test.insertAfter('rabbit','monkey');
    //assert
    expect(test).toEqual({"head": {"next": {"next": {"next": {"next": {"next": null, "value": 'monkey'}, "value": 'rabbit'}, "value": 'dog'}, "value": 'cat'}, "value": 'horse'}}
    );
  });
});