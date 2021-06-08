class Node{
  constructor(value){
    this.value = value;
    this.children = [];
  }
}

class Tree {
  constructor(root = null){
    this.root= root;
  }
}

let fizzBuzzTree = (tree) => {
  if(tree.root === null){
    return 'Tree is Empty';
  }
  let FizzBuzzTree = tree;
  let traverse = (node) => {
    if (node.value%5 === 0 && node.value%3 === 0) node.value='FizzBuzz';
    else if(node.value%5 === 0) node.value='Buzz';
    else if(node.value%3 === 0) node.value= 'Fizz';
    else node.value = `${node.value}`;
    node.children.forEach(val=>{
      traverse(val);
    });
  };
  traverse(FizzBuzzTree.root);
  return FizzBuzzTree;
};

module.exports = {
  Node,
  Tree,
  fizzBuzzTree
};


