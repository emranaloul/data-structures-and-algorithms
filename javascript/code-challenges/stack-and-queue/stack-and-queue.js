'use strict';

const Node = require('../../linked-list/linked-list');


class Stack {
  constructor() {
    this.top = null;
  }
  push(value) {
    const stack = new Node(value);
    stack.next = this.top;
    this.top = stack;
    return this;
  }
  pop() {
    if(!this.top){
      return 'not possble to pop off!!';
    }
    let stack = this.top.next;
    this.top = stack;
    return this;
  }
  peek() {
    if(!this.top){
      return 'empty stack!!';
    }
    return this.top.value;
  }
  isEmpty(){
    if(!this.top){
      return true;
    }
    else return false;
  }
}
class Queue {
  constructor() {
    this.front= null;
    this.back= null;
  }
  enqueue(value) {
    const queue = new Node(value);
    if(!this.front){
      this.front = queue;
      this.back = queue;
    }
    else {
      queue.next = this.back;
      this.back = queue;
    }
  }
  dequeue() {
    if(!this.back){
      return 'it`s an empty queue!';
    }
    let queue = this.back;
    if(this.back === this.front){
      this.front = null;
      this.back = null;
    }
    else{
      while(queue.next){
        if(queue.next === this.front){
          break;
        }
        queue = queue.next;
      }
      queue.next= null;
      this.front = queue;
    }
  }
  peek() {
    if(!this.back){
      return 'no peek for empty queue!';
    }
    return this.front.value;
  }
  isEmpty(){
    if(!this.back){
      return true;
    }
    return false;
  }
}

module.exports = {
  Node,
  Stack,
  Queue
};
