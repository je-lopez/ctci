import DoublyNode from './nodes/DoublyNode';

export default class DoublyLinkedList {
  constructor() {
    this.firstNode = null;
    this.lastNode = null;
    this.size = 0;
  }

  insertBefore(targetNode, newNode) {
    let currNode = this.firstNode;

    if (!currNode) {
      return null;
    }

    while (currNode) {
      if (currNode === targetNode) {
        const prevNode = currNode.prev;

        if (!prevNode) {
          this.firstNode = newNode;
          newNode.prev = newNode;
          newNode.next = prevNode;
        } else {
          prevNode.next = newNode;
          newNode.prev = prevNode;
          newNode.next = targetNode;
        }
      }

      currNode = currNode.next;
    }

    return null;
  }

  insertAfter(targetNode, newNode) {
    let currNode = this.firstNode;

    if (!currNode) {
      return null;
    }

    while (currNode) {
      if (currNode === targetNode) {
        newNode.next = currNode.next;
        currNode.next = newNode;
        newNode.prev = currNode;
      }

      currNode = currNode.next;
    }

    return null;
  }
}
