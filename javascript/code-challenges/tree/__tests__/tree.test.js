'use strict';

const {BinaryTree, Node, BinarySearchTree} = require('../tree');
let tree = null;

describe('intial test for binary tree', ()=>{
  it('Can successfully instantiate an empty tree',()=>{
    tree = new BinaryTree();
    expect(tree).toEqual({'root': null});
  });
  it('Can successfully instantiate a tree with a single root node', ()=>{
    let one = new Node(1);
    tree = new BinaryTree(one);
    expect(tree).toEqual({'root': {'left': null, 'right': null, 'value': 1}});
  });
  it('Can successfully add a left child and right child to a single root one', ()=>{
    let one = new Node(1);
    let two = new Node(2);
    let three = new Node(3);
    one.left = two;
    one.right = three;
    tree = new BinaryTree(one);
    expect(tree).toEqual({'root': {'left': {'left': null, 'right': null, 'value': 2}, 'right': {'left': null, 'right': null, 'value': 3}, 'value': 1}});
  });
});

describe('binary tree test', ()=>{
  beforeAll(() => {
    let one = new Node(1);
    let two = new Node(2);
    let three = new Node(3);
    let four = new Node(4);
    let five = new Node(5);
    let six = new Node(6);
    let seven = new Node(7);
    let eight = new Node(8);
    let nine = new Node(9);

    one.left = two;//
    one.right = three;//
    two.left = six;//
    six.right = seven;
    seven.left = eight;
    seven.right = nine;
    three.left = four;
    three.right = five;

    tree = new BinaryTree(one);
  });

  // root - left - right
  it('should traverse tree using pre-order', () => {
    // arrange
    let expected = [1, 2, 6, 7, 8, 9, 3, 4, 5];
    // act
    let preOrderResult = tree.preOrder();
    // assert
    expect(preOrderResult).toEqual(expected);
  });

  // left - root -right
  it('should traverse tree using in-order', () => {
    // arrange
    let expected = [6, 8, 7, 9, 2, 1, 4, 3, 5];
    // act
    let inOrderResult = tree.inOrder();
    // assert
    expect(inOrderResult).toEqual(expected);
  });

  // left - right - root
  it('should traverse tree using post-order', () => {
    // arrange
    let expected = [8, 9, 7, 6, 2, 4, 5, 3, 1];
    // act
    let postOrderResult = tree.postOrder();
    // assert
    expect(postOrderResult).toEqual(expected);
  });
});

describe('binary saerch tree test', ()=>{
  it('should traverse tree using pre-order', () => {
    let emran = new BinarySearchTree;
    emran.add(5);
    emran.add(7);
    emran.add(6);
    emran.add(3);
    emran.add(4);
    emran.add(8);

    expect(emran.root.value).toEqual(5);
    expect(emran.root.right.value).toEqual(7);
    expect(emran.root.left.value).toEqual(3);
  });
  it('should return true if the input exists in the tree or false it does not exist', ()=>{
    let emran = new BinarySearchTree;
    emran.add(5);
    emran.add(7);
    emran.add(6);
    emran.add(3);
    emran.add(4);
    emran.add(8);

    expect(emran.contains(8)).toEqual(true);
    expect(emran.contains(10)).toEqual(false);
  });

});


