import Node from './nodes/Node';

export default class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(data) {
    this.addTail(data);
  }

  addHead(data) {
    if (!data) {
      return undefined;
    }

    const headNode = new Node(data);

    if (!this.head) {
      this.head = headNode;
    } else {
      headNode.next = this.head;
      this.head = headNode;
    }

    this.size += 1;
  }

  addTail(data) {
    if (!data) {
      return undefined;
    }

    const tailNode = new Node(data);
    let node = this.head;

    if (!node) {
      this.head = tailNode;
    } else {
      while (node.next) {
        node = node.next;
      }

      node.next = tailNode;
    }

    this.size += 1;
  }

  remove(data) {
    let prevNode = null;
    let currNode = this.head;

    while (currNode && data) {
      if (currNode.data === data) {
        this.size -= 1;

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
    this.size -= 1;
  }

  removeTail() {
    let prevNode = null;
    let currNode = this.head;

    while (currNode) {
      if (!currNode.next) {
        this.size -= 1;

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

  contains(element) {
    let node = this.head;

    while (node) {
      if (node.data === element) {
        return true;
      }
    }

    return false;
  }

  getSize() {
    return this.size;
  }

  getHead() {
    return this.head || 'empty';
  }

  getTail() {
    let node = this.head;

    while (node.next) {
      node = node.next;
    }

    return node;
  }

  peek() {
    return this.head;
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
