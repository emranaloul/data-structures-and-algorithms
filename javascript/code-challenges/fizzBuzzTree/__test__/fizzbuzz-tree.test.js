'use strict';

const {Node, fizzBuzzTree, Tree}  = require('../fizzbuzz-tree');
let tree = null;


describe('Tree test', ()=>{
  beforeAll(() => {
    let nodeA = new Node(3);
    let nodeB = new Node(5);
    let nodeC = new Node(15);
    let nodeD = new Node(18);
    let nodeE = new Node(17);
    let nodeF = new Node(29);
    let nodeG = new Node(100);
    let nodeH = new Node(75);
    let nodeI = new Node(90);

    nodeA.children.push(nodeB);
    nodeA.children.push(nodeC);
    nodeD.children.push(nodeE);
    nodeD.children.push(nodeF);
    nodeA.children.push(nodeD);
    nodeB.children.push(nodeG);
    nodeB.children.push(nodeH);
    nodeC.children.push(nodeI);
    nodeC.children.push(nodeE);

    tree = new Tree(nodeA);
  });

  it('should return the max value', () => {
    let expected = {'root': {'children': [{'children': [{'children': [], 'value': 'Buzz'}, {'children': [], 'value': 'FizzBuzz'}], 'value': 'Buzz'}, {'children': [{'children': [], 'value': 'FizzBuzz'}, {'children': [], 'value': '17'}], 'value': 'FizzBuzz'}, {'children': [{'children': [], 'value': '17'}, {'children': [], 'value': '29'}], 'value': 'Fizz'}], 'value': 'Fizz'}};
    expect(fizzBuzzTree(tree)).toEqual(expected);
  });
});
