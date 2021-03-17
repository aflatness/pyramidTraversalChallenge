const Tree = function (val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

// [1,2,1,4,1,1];
//       1
//      / \
//     2   1

const createPyramid = (pyramid) => {
  let previous = null
  let curr = new Tree(pyramid[0]);
  let tree = curr;
  let currNodesRow = [];
  let ind = 0;
  let end = 1;
  let incr = 1;

  while(end <= pyramid.length) {
    currNodesRow.push(pyramid.slice(ind ,end));
    let tmp = end;
    ind = end;
    incr++;
    end = tmp + incr;
  }

  currNodesRow.forEach(row => {
    row.forEach(node => {
      //TODO:
    })
  })
  return tree;
}
createPyramid([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);

const pyramidTraverse = (pyramid, target) => {
  let tree = createPyramid(pyramid);
  let path = '';

  const traverse = (node, total, currPath) => {
    total *= node.val;
    if (total === target && !node.left && !node.right) {
      path = currPath;
      return;
    }
    if (node.left && total * node.left.val <= target) {
      traverse(node.left, total, currPath + 'L');
    }
    if (path) { return };
    if (node.right && total * node.right.val <= target) {
      traverse(node.right, total, currPath + 'R');
    }
  }
  traverse(tree, 1, path);
  return path ? path : null;
}