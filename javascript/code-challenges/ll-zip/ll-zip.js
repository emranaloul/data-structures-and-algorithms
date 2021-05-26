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
  let newLL = new LinkedList;
  let lv1 = ll1.head;
  let lv2 = ll2.head;
  let lenght1 = ll1.llLength();
  let lenght2 = ll2.llLength();
  let newLength = lenght1+lenght2;
  for(let i=0; i<= newLength; i++){
    if(lv1){
      newLL.append(lv1.value);
      lv1 = lv1.next;
    }
    if(lv2){
      newLL.append(lv2.value);
      lv2 = lv2.next;
    }
  }
  return newLL;
};


module.exports ={
  LinkedList,
  zipLists

};
