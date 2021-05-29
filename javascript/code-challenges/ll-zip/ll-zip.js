'use strict';

const Node = require('../../linked-list/linked-list');
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
  toString() {
    try {
      let head = this.head;
      let result = [];
      while(head) {
        result.push(' { ');
        result.push(head.value);
        result.push(' } ');
        result.push(' -> ');
        head = head.next;
      }
      result.push('NULL');
      return result.join('');

    } catch (error) {
      console.error(error);
    }
  }


}
let zipLists = function (ll1,ll2){
  if(!ll1.head || !ll2.head){
    return `Error, you should insert linked-list only`;
  }
  let lv1 = ll1.head;
  let lv2 = ll2.head;
  while(lv2){
    let newValue = lv1.next;
    lv1.next = lv2;
    lv2 = newValue;
    lv1 = lv1.next;
  }
  return ll1;
};


module.exports ={
  LinkedList,
  zipLists

};
