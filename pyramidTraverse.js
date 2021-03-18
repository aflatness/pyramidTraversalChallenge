//Tree creator
const Tree = function (val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

const createPyramid = (pyramid) => {
  let currNodesRow = [];
  let ind = 0;
  let end = 1;
  let incr = 1;

  //Create 2D array, symolizing rows of the pyramid
  while(end <= pyramid.length) {
    currNodesRow.push(pyramid.slice(ind ,end));
    let tmp = end;
    ind = end;
    incr++;
    end = tmp + incr;
  }

  //Checks for invalid pyramid
  if (ind !== pyramid.length) {
    return null;
  }

  currNodesRow[0][0] = new Tree(currNodesRow[0][0]);

  //Turn each position into a node.
  //Set the nodes as left and right values to the above node,
    //setting the next left as the current right, to share the same node
  for (let i = 1; i < currNodesRow.length; i++) {
    let row = currNodesRow[i];
    let left = currNodesRow[i][0] = new Tree(row[0]);
    let right, parent;

    for (let j = 1; j < row.length; j++) {
      parent = currNodesRow[i - 1][j - 1];
      parent.right = currNodesRow[i][j] = new Tree(row[j]);
      parent.left = left
      left = parent.right;
    }
  }
  //Return top of pyramid
  return currNodesRow[0][0];
}

const pyramidTraverse = (pyramid, target) => {
  //Create Pyramid from array of numbers
  let tree = createPyramid(pyramid);

  //Return null path since pyramid is invalid
  if (!tree) {
    return null;
  }
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

module.exports = {
  createPyramid,
  pyramidTraverse
}