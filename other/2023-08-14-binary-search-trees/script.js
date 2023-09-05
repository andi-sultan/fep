class Node {
  constructor(value) {
    this.bValue = value;
    this.cLeft = null;
    this.aRight = null;
    this.aaParent = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let currentNode = this.root;
    while (true) {
      if (value < currentNode.bValue) {
        if (!currentNode.cLeft) {
          currentNode.cLeft = newNode;
          newNode.aaParent = currentNode;
          return this;
        }
        currentNode = currentNode.cLeft;
      } else {
        if (!currentNode.aRight) {
          currentNode.aRight = newNode;
          newNode.aaParent = currentNode;
          return this;
        }
        currentNode = currentNode.aRight;
      }
    }
  }

  // Helper function to find the minimum node in a subtree
  findMinNode(node) {
    while (node.cLeft !== null) {
      node = node.cLeft;
    }
    return node;
  }
  delete(value) {
    const deleteNode = (node, value) => {
      if (node === null) {
        return null;
      }

      if (value < node.bValue) {
        node.cLeft = deleteNode(node.cLeft, value);
      } else if (value > node.bValue) {
        node.aRight = deleteNode(node.aRight, value);
      } else {
        if (node.cLeft === null && node.aRight === null) {
          node = null;
        } else if (node.cLeft === null) {
          node = node.aRight;
        } else if (node.aRight === null) {
          node = node.cLeft;
        } else {
          const minRightSubtree = this.findMinNode(node.aRight);
          node.bValue = minRightSubtree.bValue;
          node.aRight = deleteNode(node.aRight, minRightSubtree.bValue);
        }
      }
      return node;
    };
    this.root = deleteNode(this.root, value);
  }

  buildTree(array) {
    array.sort((a, b) => a - b);
    const sortedAndDeduplicatedArray = Array.from(new Set(array));

    const buildBalancedTree = (arr, curNode) => {
      if (arr.length === 0) {
        return null;
      }

      const middleIndex = Math.floor(arr.length / 2);
      const middleValue = arr[middleIndex];

      const root = new Node(middleValue);
      root.cLeft = buildBalancedTree(arr.slice(0, middleIndex), root);
      root.aRight = buildBalancedTree(arr.slice(middleIndex + 1), root);
      root.aaParent = curNode;

      return root;
    };

    this.root = buildBalancedTree(sortedAndDeduplicatedArray, null);

    return this.root;
  }

  find(value) {
    let currentNode = this.root;
    while (currentNode) {
      if (value === currentNode.bValue) {
        return currentNode;
      } else if (value < currentNode.bValue) {
        currentNode = currentNode.cLeft;
      } else {
        currentNode = currentNode.aRight;
      }
    }
    return null;
  }

  levelOrder(callback = null) {
    if (!this.root) {
      return [];
    }

    const queue = [this.root];
    const result = [];

    while (queue.length > 0) {
      const currentNode = queue.shift();
      if (callback) {
        callback(currentNode);
      } else {
        result.push(currentNode.bValue);
      }

      if (currentNode.cLeft) {
        queue.push(currentNode.cLeft);
      }
      if (currentNode.aRight) {
        queue.push(currentNode.aRight);
      }
      // console.log("result", result);
    }

    return result;
  }

  inorder(callback = null) {
    const result = [];

    const traverse = (node) => {
      if (node === null) {
        return;
      }

      traverse(node.cLeft);
      if (callback) {
        callback(node);
      } else {
        result.push(node.bValue);
      }
      traverse(node.aRight);
    };

    traverse(this.root);

    return result;
  }

  preorder(callback = null) {
    const result = [];

    const traverse = (node) => {
      if (node === null) {
        return;
      }

      if (callback) {
        callback(node);
      } else {
        result.push(node.bValue);
      }
      traverse(node.cLeft);
      traverse(node.aRight);
    };

    traverse(this.root);

    return result;
  }

  postorder(callback = null) {
    const result = [];

    const traverse = (node) => {
      if (node === null) {
        return;
      }

      traverse(node.cLeft);
      traverse(node.aRight);
      if (callback) {
        callback(node);
      } else {
        result.push(node.bValue);
      }
    };

    traverse(this.root);

    return result;
  }

  height(node) {
    if (node === null) {
      return -1;
    }

    const leftHeight = node.cLeft ? this.height(node.cLeft) : 0;
    const rightHeight = node.aRight ? this.height(node.aRight) : 0;

    return Math.max(leftHeight, rightHeight) + 1;
  }

  depth(node) {
    if (node === null) {
      return -1;
    }

    return this.depth(node.aaParent) + 1;
  }

  isBalanced(node = this.root) {
    if (node === null) {
      return true;
    }

    const leftHeight = this.height(node.cLeft);
    const rightHeight = this.height(node.aRight);
    // console.log("--------------");
    // console.log(node.cLeft);
    // console.log(node.aRight);
    // console.log("left-right", Math.abs(leftHeight - rightHeight));
    // console.log("leftHeight", leftHeight);
    // console.log("rightHeight", rightHeight);

    if (
      Math.abs(leftHeight - rightHeight) <= 1 &&
      this.isBalanced(node.cLeft) &&
      this.isBalanced(node.aRight)
    ) {
      return true;
    }

    return false;
  }

  rebalance(node = this.node) {
    if (node === null) {
      return null;
    }

    const dataInorder = this.inorder();
    this.buildTree(dataInorder);
    return this.root;
  }
}

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.aRight !== null) {
    prettyPrint(node.aRight, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.bValue}`);
  if (node.cLeft !== null) {
    prettyPrint(node.cLeft, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

const bst = new BinarySearchTree();
// bst.insert(10);
// bst.insert(5);
// bst.insert(2);
// bst.insert(7);
// prettyPrint(bst.buildTree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]));
// bst.buildTree([
//   1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324, 12, 35, 56, 67, 3567, 3232,
// ]);
bst.buildTree([1, 7, 4, 23, 8, 4, 3, 12, 35, 56, 3567, 3232]);
bst.insert(15);
bst.insert(5);
bst.insert(67);
bst.insert(324);
bst.insert(6345);
bst.insert(9);

prettyPrint(bst.root, "prefix");
// console.log(bst);
// console.log(bst.find(4));

// console.log("Before deletion:", bst.find(324)); // Output: true
// bst.delete(324);
// console.log("After deletion:", bst.find(324)); // Output: false
// prettyPrint(bst.root, "prefix");

// bst.levelOrder((node) => {
//   console.log(node.bValue);
// });

// const resultArray = bst.levelOrder();
// console.log(resultArray);

// bst.inorder((node) => {
//   console.log(node.bValue);
// });

// const resultArray = bst.inorder();
// console.log(resultArray);

// const resultArray = bst.preorder((node) => {
//   console.log(node.bValue);
// });
// console.log(resultArray);

// const resultArray = bst.postorder((node) => {
//   console.log(node.bValue);
// });
// console.log(resultArray);

// const rootNodeHeight = bst.height(bst.root);
// console.log("Height of root node:", rootNodeHeight);

// const someNode = bst.find(8);
// const nodeDepth = bst.depth(someNode);
// console.log("Depth of the node:", nodeDepth);

// const balanced = bst.isBalanced();
// console.log("Is the tree balanced?", balanced);

const rebalance = bst.rebalance();
console.log("Rebalance:");
prettyPrint(bst.root, "rblnce");
const balanced = bst.isBalanced();
// console.log(bst);
// bst.inorder((n)=>console.log(n.bValue))
console.log("Is the tree balanced?", balanced);
