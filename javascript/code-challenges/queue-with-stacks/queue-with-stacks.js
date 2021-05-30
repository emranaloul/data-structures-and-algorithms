'use strict';


const Node = require('../../linked-list/linked-list');

class Stack {
  constructor() {
    this.top = null;
  }
  push(value) {
    const node = new Node(value);
    node.next = this.top;
    this.top = node;
    return this;
  }
  pop() {
    if(!this.top){
      return 'not possible to pop off empty stack!';
    }
    let node = this.top.next;
    this.top = node;
    return this;
  }
  peek() {
    if(!this.top){
      return 'empty stack';
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
class PseudoQueue {
  constructor() {
    this.stack1= new Stack;
    this.stack2= new Stack;
  }
  enqueue(value) {
    this.stack1.push(value);
  }
  dequeue() {
    if(this.stack1.isEmpty() && this.stack2.isEmpty()){
      return 'not possible to dequeue an empty Queue';
    }
    if (this.stack2.isEmpty()) {
      while (!this.stack1.isEmpty()) {
        let node = new Node (this.stack1.top.value);
        this.stack2.push(node);
        this.stack1.pop();
      }
    }
    this.stack2.pop();
  }
  isEmpty(){
    if(this.stack1.isEmpty() && this.stack2.isEmpty()){
      return true;
    }
    return false;
  }
}
module.exports = PseudoQueue;
