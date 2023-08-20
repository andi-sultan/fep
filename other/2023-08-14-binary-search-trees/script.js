class Node {
  constructor(value) {
    this.bValue = value;
    this.cLeft = null;
    this.aRight = null;
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
          return this;
        }
        currentNode = currentNode.cLeft;
      } else {
        if (!currentNode.aRight) {
          currentNode.aRight = newNode;
          return this;
        }
        currentNode = currentNode.aRight;
      }
    }
  }

  // todo: delete(value) {
  // Helper function to find the minimum node in a subtree
  findMinNode(node) {
    while (node.left !== null) {
      node = node.left;
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
          node.bValue = minRightSubtree.value;
          node.aRight = deleteNode(node.aRight, minRightSubtree.value);
        }
      }
      return node;
    };
    this.root = deleteNode(this.root, value);
  }

  buildTree(array) {
    array.sort((a, b) => a - b);
    const sortedAndDeduplicatedArray = Array.from(new Set(array));

    const buildBalancedTree = (arr) => {
      if (arr.length === 0) {
        return null;
      }

      const middleIndex = Math.floor(arr.length / 2);
      const middleValue = arr[middleIndex];

      const root = new Node(middleValue);
      root.cLeft = buildBalancedTree(arr.slice(0, middleIndex));
      root.aRight = buildBalancedTree(arr.slice(middleIndex + 1));

      return root;
    };

    this.root = buildBalancedTree(sortedAndDeduplicatedArray);

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
bst.buildTree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
bst.insert(15);

prettyPrint(bst.root, "prefix");
console.log(bst.find(7));

console.log("Before deletion:", bst.find(7)); // Output: true
bst.delete(7);
console.log("After deletion:", bst.find(7)); // Output: false
prettyPrint(bst.root, "prefix");
