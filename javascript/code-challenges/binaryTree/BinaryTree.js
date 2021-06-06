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

  findMaximumValue(){
    let maxValue = 0;
    let traverse = (node =>{
      if (node.value > maxValue){
        maxValue = node.value;
      }
      if(node.left){
        if(node.left.value > maxValue)
          maxValue = node.left.value;
        traverse(node.left);
      }
      if(node.right){
        if(node.right.value > maxValue){
          maxValue = node.right.value;
        }
        traverse(node.right);
      }
    });
    traverse(this.root);
    return maxValue;
  }
}

module.exports = {
  Node,
  BinaryTree
};
