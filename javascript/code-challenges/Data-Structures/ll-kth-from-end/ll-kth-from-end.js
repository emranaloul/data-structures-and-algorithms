'use strict';

const Node = require('../../../../javascript/linked-list/linked-list');
class LinkedList {
  constructor() {
    this.head = null;
  }
  append(value) {
    let node = new Node(value);
    try {
      if (!this.head) {// empty linked list
        this.head = node;
      } else {
        let lastNode = this.head;
        while (lastNode.next) {
          lastNode = lastNode.next;
        }
        lastNode.next = node;
      }
    }
    catch (error){
      console.error('Ann error occured: ', error);
    }
  }

  llLength() {
    let current = this.head;
    let count = 0;
    while (current)
    {
      current = current.next;
      count++;
    }
    return count;
  }
  kthFromEnd(k) {
    let current = this.head;
    let length = 0;
    if (k < 0) {
      throw `negative number not accepted`;
    }
    let checkLength = this.llLength();
    if (k >= checkLength) {
      throw `The number is bigger than the length of the linked list`;
    }
    let numFind = checkLength-k;
    while (current) {
      length++;
      if (length === numFind) {
        return current.value;
      }
      current = current.next;
    }
    throw `The linked list is shorter than ${numFind} nodes.`;
  }
}
module.exports = LinkedList;
