const Tree = function (val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

const createPyramid = (pyramid) => {

}

const pyramidTraverse = (pyramid, target) => {
  let tree = createPyramid(pyramid);
  let path = '';
  let found = false;

  const traverse = (node, total, currPath) => {
    total *= node.val;
    if (total === target && !node.left && !node.right) {
      path = currPath;
      found = true;
      return;
    }
    if (node.left && total * node.left.val <= target) {
      traverse(node.left, total, currPath + 'L');
    }
    if (found) { return };
    if (node.right && total * node.right.val <= target) {
      traverse(node.right, total, currPath + 'R');
    }
  }
  traverse(tree, 1, path);
  return path ? path : null;
}