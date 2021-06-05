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
  preOrder(){
    let result = [];
    let traverse = (node =>{
      result.push(node.value);
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
    });
    traverse(this.root);
    return result;
  }
  inOrder(){
    let result =[];
    let traverse = (node =>{
      if(node.left) traverse(node.left);
      result.push(node.value);
      if(node.right) traverse(node.right);
    });
    traverse(this.root);
    return result;
  }
  postOrder(){
    let result = [];
    let traverse = (node =>{
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
      result.push(node.value);
    });
    traverse(this.root);
    return result;
  }
}


class BinarySearchTree {
  constructor(root = null){
    this.root = root;
  }
  add(value){
    let node = new Node(value);
    if(this.root === null){
      this.root = node;
    }
    else {
      let addValue = ((current, node)=>{
        if(node.value < current.value){
          if(current.left === null){
            current.left = node;
          } else{
            addValue(current.left, node);
          }
        }
        else{
          if(current.right === null){
            current.right = node;
          } else{
            addValue(current.right,node);
          }
        }

      });
      addValue(this.root, node);
    }

  }
  contains(value){
    if (value === this.root.value){
      return true;
    } else {
      let checkValue = ((num, current)=>{
        if(num > current.value){
          if(current.right === null){
            return false;
          } else if (num === current.right.value){
            return true;
          } else { return checkValue(num,current.right);}
        }
        else {
          if (current.left === null){
            return false;
          } else if(current.left.value === num){
            return true;
          } else {
            return checkValue(num, current.left);
          }
        }

      });

      return checkValue(value, this.root);
    }
  }
}

module.exports = {
  Node,
  BinaryTree,
  BinarySearchTree
};
