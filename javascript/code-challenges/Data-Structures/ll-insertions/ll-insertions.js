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
      console.error('An error occured: ', error);
    }
  }
  insertBefore(value, newVal) {
    let current = this.head;
    let previous;
    while ((current) && (current.value !== value)) {
      previous = current;
      current = current.next;
    }
    if (!current) {
      throw `The value ${value}  wasn't found.`;
    } else {
      const newNode = new Node(newVal);
      newNode.next = current;
      if (current === this.head) {
        this.head = newNode;
      } else {
        previous.next = newNode;
      }
    }
  }
  insertAfter(value, newVal) {
    let current = this.head;
    while ((current) && (current.value !== value)) {
      current = current.next;
    }
    if (!current) {
      throw `The value ${value}  wasn't found.`;
    } else {
      const newNode = new Node(newVal);
      newNode.next = current.next;
      current.next = newNode;
    }
  }
  include (value){
    let check = false;
    let checkNode = this.head;
    try {
      while(checkNode){
        if (checkNode.value === value){
          check = true;
          console.log(check);
          return check;
        }
        checkNode = checkNode.next;
      }
      console.log(check);
      return check;
    }
    catch (error){
      console.error('An error occured: ', error);
    }
  }
}

module.exports = LinkedList;
