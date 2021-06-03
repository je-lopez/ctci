class LinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  add(node) {
    if (!node) {
      return undefined;
    }

    this.addTail(node);
  }

  addHead(headNode) {
    if (!headNode) {
      return undefined;
    }

    if (!this.head) {
      this.head = headNode;
    } else {
      headNode.next = this.head;
      this.head = headNode;
    }

    this.length += 1;
  }

  addTail(tailNode) {
    if (!tailNode) {
      return undefined;
    }

    let node = this.head;

    if (!node) {
      this.head = tailNode;
    } else {
      while (node.next) {
        node = node.next;
      }

      node.next = tailNode;
    }

    this.length += 1;
  }

  remove(data) {
    let prevNode = null;
    let currNode = this.head;

    while (currNode && data) {
      if (currNode.data === data) {
        this.length -= 1;

        if (!prevNode) {
          this.head = null;
        } else {
          prevNode.next = currNode.next;
          return currNode;
        }
      }

      prevNode = currNode;
      currNode = prevNode.next;
    }

    return undefined;
  }

  removeHead() {
    if (!this.head) {
      return undefined;
    }

    this.head = this.head.next;
    this.length -= 1;
  }

  removeTail() {
    let prevNode = null;
    let currNode = this.head;

    while (currNode) {
      if (!currNode.next) {
        this.length -= 1;

        if (!prevNode) {
          this.head = null;
        } else {
          prevNode.next = null;
        }

        return currNode;
      }

      prevNode = currNode;
      currNode = prevNode.next;
    }

    return undefined;
  }

  printList() {
    let node = this.head;

    console.log('List:');

    if (!node) {
      console.log('empty\n');
    } else {
      while (node) {
        console.log(node.data);
        node = node.next;
      }

      console.log('\n');
    }
  }
}
