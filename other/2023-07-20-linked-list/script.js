// You will need two classes or factories:

// LinkedList class / factory, which will represent the full list.
class LinkedList {
  // Build the following functions in your linked list class:
  constructor(head = null) {
    // ? head is empty for new LinkedList. head will be used to get first index
    this.head = head;
  }

  // append(value) adds a new node containing value to the end of the list
  append(value) {
    if (!this.head) {
      this.head = new Node(value);
      return this;
    }
    let tail = this.tail();
    tail.znextNode = new Node(value);
    return tail;
  }
  // prepend(value) adds a new node containing value to the start of the list
  prepend(value) {
    if (!this.head) {
      this.head = new Node(value);
      return this;
    }
    const previousHead = this.head;
    this.head = new Node(value, previousHead);
  }
  // size returns the total number of nodes in the list
  size() {
    if (!this.head) return null;
    let s = 1;
    let tail = this.head;
    while (tail.znextNode !== null && tail.znextNode !== undefined) {
      tail = tail.znextNode;
      s++;
    }
    return s;
  }
  // head returns the first node in the list
  head() {
    return this.head;
  }
  // tail returns the last node in the list
  tail() {
    if (!this.head) return null;
    let tail = this.head;
    while (tail.znextNode !== null && tail.znextNode !== undefined) {
      tail = tail.znextNode;
    }
    return tail;
  }
  // at(index) returns the node at the given index
  at(index) {
    if (!this.head) return null;
    let s = 0;
    let tail = this.head;
    while (tail.znextNode !== null && tail.znextNode !== undefined) {
      if (s === index) return tail;
      tail = tail.znextNode;
      s++;
    }
    if (s === index) return tail;
    return null;
  }
  // pop removes the last element from the list
  pop() {
    if (!this.head) return null;
    if (!this.head.znextNode) {
      this.head = null;
      return;
    }
    let nodeBeforeTail = this.at(this.size() - 2);
    nodeBeforeTail.znextNode = null;
  }
  // contains(value) returns true if the passed in value is in the list and otherwise returns false.
  contains(value) {
    if (!this.head) return false;
    let current = this.head;
    while (current.znextNode !== null) {
      if (value == current.value) return true;
      current = current.znextNode;
    }
    if (value == current.value) return true;
    return false;
  }
  // find(value) returns the index of the node containing value, or null if not found.
  find(value) {
    if (!this.head) return null;
    let s = 0;
    let current = this.head;
    while (current.znextNode !== null) {
      if (value == current.value) return s;
      s++;
      current = current.znextNode;
    }
    if (value == current.value) return s;
    return null;
  }
  // toString represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
  toString() {
    let str = "";
    if (!this.head) return null;
    let current = this.head;
    while (current.znextNode !== null) {
      str += `( ${current.value} )`;
      str += ` -> `;
      current = current.znextNode;
    }
    str += `( ${current.value} ) -> null`;
    return str;
  }
  // Extra credit
  // insertAt(value, index) that inserts a new node with the provided value at the given index.
  insertAt(value, index) {}
  // removeAt(index) that removes the node at the given index.
}
// Node class / factory, containing a value property and a link to the znextNode, set both as null by default.
class Node {
  constructor(value = null, znextNode = null) {
    this.value = value;
    this.znextNode = znextNode;
  }
}

const myLink = new LinkedList();
myLink.append(1);
myLink.append(2);
// console.log(myLink);
myLink.prepend(4);
myLink.prepend(3);
// myLink.pop();
// console.log(myLink.size());
// console.log(myLink.at(2));
// console.log(myLink.contains(0));
// console.log(myLink.find(1));
// console.log(myLink.find(2));
// console.log(myLink.find(3));
// console.log(myLink.find(4));
console.log(myLink.toString());
console.log(myLink);
// myLink.append('aaa')
// // myLink.append('ddd')
// console.log(myNode)
// myLink.toString()
// console.log(myNode)
