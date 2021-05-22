const Node = require('./linked-list');

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value){
    this.head.value = new Node(value);
  }

  include (value){
    try {

      let valueCheck = false;
      let nodeCheck = this.head;
      while(nodeCheck){
        if (nodeCheck.value === value){
          valueCheck = true;
          return valueCheck;
        }
        nodeCheck = nodeCheck.next;
      }
      return valueCheck;
    } catch (error) {
      console.error(error);
    }
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


  add(value) {
    try {

      let node = new Node(value);
      if (!this.head) {
        this.head = node;
      } else {
        let lastNode = this.head;
        while (lastNode.next) {
          lastNode = lastNode.next;
        }
        lastNode.next = node;
      }
    } catch (error) {
      console.error(error);

    }
  }

  // addNewHead(value) {
  //   let newNode = new Node(value);
  //   if (!this.head) {
  //     this.head = newNode;
  //   } else {
  //     newNode.next = this.head;
  //     this.head = newNode;
  //   }
  // }
}

module.exports = LinkedList;
