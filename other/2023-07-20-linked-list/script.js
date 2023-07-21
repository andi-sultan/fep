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
    tail.nextNode = new Node(value);
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
    while (tail.nextNode !== null && tail.nextNode !== undefined) {
      tail = tail.nextNode;
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
    while (tail.nextNode !== null && tail.nextNode !== undefined) {
      tail = tail.nextNode;
    }
    return tail;
  }
  // at(index) returns the node at the given index
  at(index) {
    if (!this.head) return null;
    let s = 0;
    let tail = this.head;
    while (tail.nextNode !== null && tail.nextNode !== undefined) {
      if (s === index) return tail.value;
      tail = tail.nextNode;
      s++;
    }
    if (s === index) return tail.value;
    return null;
  }
  // pop removes the last element from the list
  pop() {
    if (!this.head) return null;
    let tail = this.head;
    while (tail.nextNode !== null && tail.nextNode !== undefined) {
      tail = tail.nextNode;
    }
    if (tail.nextNode !== null && tail.nextNode !== undefined) {
      tail = tail.nextNode;
    } else {
    }
    return tail;
  }
  // contains(value) returns true if the passed in value is in the list and otherwise returns false.
  // find(value) returns the index of the node containing value, or null if not found.
  // toString represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
  toString() {}
  // Extra credit
  // insertAt(value, index) that inserts a new node with the provided value at the given index.
  // removeAt(index) that removes the node at the given index.
}
// Node class / factory, containing a value property and a link to the nextNode, set both as null by default.
class Node {
  constructor(value, nextNode) {
    this.value = null || value;
    this.nextNode = null || nextNode;
  }
}

const myLink = new LinkedList();
myLink.append(1);
myLink.append(2);
// console.log(myLink);
myLink.prepend(4);
myLink.prepend(3);
// console.log(myLink.size());
console.log(myLink.at(3));
// console.log(myLink);
// myLink.append('aaa')
// // myLink.append('ddd')
// console.log(myNode)
// myLink.toString()
// console.log(myNode)
