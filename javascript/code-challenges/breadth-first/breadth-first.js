'use strict';

class Node{
  constructor(value, left=null, right = null){
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null){
    this.root = root;
  }

  breadthFirst(){
    if(this.root === null){
      return null;
    }
    let result = [];
    let traverse = (node, cb)=> {
      let current = [node];
      while (current.length) {
        let next = [];
        current.forEach((val) =>{
          cb(val);
          if (val.left) next.push(val.left);
          if (val.right) next.push(val.right);
        });
        current = next;
      }
    };
    traverse(this.root, function(node) {
      result.push(node.value);
    });
    return result;
  }
}

module.exports = {
  Node,
  BinaryTree
};
