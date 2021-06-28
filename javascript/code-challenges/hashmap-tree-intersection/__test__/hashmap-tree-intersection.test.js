'use strict';

const {Node,BinaryTree} = require('../../binaryTree/BinaryTree');
const {treeIntersection} = require('../hashmap-tree-intersection');

describe('Insertion Tree', ()=>{
  it('should return an array of the insertion', ()=>{
    let treeOne = new BinaryTree;
    treeOne.root = new Node(50);
    treeOne.root.left = new Node(100);
    treeOne.root.right = new Node(250);
    treeOne.root.left.left = new Node(75);
    treeOne.root.left.right = new Node(160);
    treeOne.root.left.right.left = new Node(125);
    treeOne.root.left.right.right = new Node(175);
    treeOne.root.right.left = new Node(200);
    treeOne.root.right.right = new Node(350);
    treeOne.root.right.right.left = new Node(300);
    treeOne.root.right.right.right = new Node(500);
    let treeTwo = new BinaryTree;
    treeTwo.root = new Node(42);
    treeTwo.root.left = new Node(100);
    treeTwo.root.right = new Node(600);
    treeTwo.root.left.left = new Node(15);
    treeTwo.root.left.right = new Node(160);
    treeTwo.root.left.right.left = new Node(125);
    treeTwo.root.left.right.right = new Node(175);
    treeTwo.root.right.left = new Node(200);
    treeTwo.root.right.right = new Node(350);
    treeTwo.root.right.right.left = new Node(4);
    treeTwo.root.right.right.right = new Node(500);

    expect(treeIntersection(treeOne,treeTwo)).toEqual([ 100, 160, 125, 175, 200, 350, 500 ]);
  });
  it('should return an array of the insertion again', ()=>{
    let treeOne = new BinaryTree;
    treeOne.root = new Node(50);
    treeOne.root.left = new Node(100);
    treeOne.root.right = new Node(250);
    treeOne.root.left.left = new Node(75);
    treeOne.root.left.right = new Node(160);
    treeOne.root.left.right.left = new Node(125);
    treeOne.root.left.right.right = new Node(175);
    treeOne.root.right.left = new Node(200);
    treeOne.root.right.right = new Node(350);
    treeOne.root.right.right.left = new Node(300);
    treeOne.root.right.right.right = new Node(500);
    let treeTwo = new BinaryTree;
    treeTwo.root = new Node(10);
    treeTwo.root.left = new Node(20);
    treeTwo.root.right = new Node(30);
    treeTwo.root.left.left = new Node(40);
    treeTwo.root.left.right = new Node(50);
    treeTwo.root.left.right.left = new Node(60);
    treeTwo.root.left.right.right = new Node(70);
    treeTwo.root.right.left = new Node(80);
    treeTwo.root.right.right = new Node(90);
    treeTwo.root.right.right.left = new Node(100);
    treeTwo.root.right.right.right = new Node(110);

    expect(treeIntersection(treeOne,treeTwo)).toEqual( [ 50, 100 ]);
  });
  it('should return an empty array', () => {
    let treeOne = new BinaryTree;
    let treeTwo = new BinaryTree;

    expect(treeIntersection(treeOne,treeTwo)).toEqual( []);
  });
});
