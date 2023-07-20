// You will need two classes or factories:

// LinkedList class / factory, which will represent the full list.
class LinkedList {
  // Build the following functions in your linked list class:
  constructor(head = null) {
    // ? head is empty for new LinkedList. functions like append and prepend will add new Node
    // ? head will be used for prepend...
    this.head = head;
  }

  // append(value) adds a new node containing value to the end of the list
  append(value) {}
  // prepend(value) adds a new node containing value to the start of the list
  // size returns the total number of nodes in the list
  // head returns the first node in the list
  // tail returns the last node in the list
  tail() {}
  // at(index) returns the node at the given index
  // pop removes the last element from the list
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
  constructor(value) {
    this.value = null || value;
    this.nextNode = null;
  }
}

const myLink = new LinkedList();
console.log(myLink);
// myLink.append('sss')
// console.log(myNode)
// myLink.append('aaa')
// // myLink.append('ddd')
// console.log(myNode)
// myLink.toString()
// console.log(myNode)
