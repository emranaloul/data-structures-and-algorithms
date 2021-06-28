'use strict';

const treeIntersection = (treeOne, treeTwo) =>{
  const firstMap = new Map();
  const intersectionMap = new Map();
  const intersectionArray = [];
  (function firstTraverse(root) {
    if (root === null) {
      return null;
    }
    firstMap.set(root.value, true);
    firstTraverse(root.left);
    firstTraverse(root.right);
    return null;
  }(treeOne.root));
  (function secondTraverse(root) {
    if (root === null) {
      return null;
    }
    if (firstMap.get(root.value) && !intersectionMap.get(root.value)) {
      intersectionMap.set(root.value, true);
    }
    secondTraverse(root.left);
    secondTraverse(root.right);
    return null;
  }(treeTwo.root));
  intersectionMap.forEach((value, key) => {
    intersectionArray.push(key);
  });
  return intersectionArray;
};

module.exports = {treeIntersection};
