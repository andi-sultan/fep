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

  // buildTree()
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
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(2);
bst.insert(7);

console.log(bst);
prettyPrint(bst.root, "prefix");
