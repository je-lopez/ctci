import Node from './nodes/Node';

export default class Stack {
  constructor(maxSize) {
    this.top = null;
    this.size = 0;
    this.maxSize = maxSize || null;
  }

  push(data) {
    let exit = false;

    // TODO: test the log: combine these two checks and use && for the log, perhaps like "data && console.log(...)" ?
    if (!data) {
      exit = true;
    }

    if (this.size === this.maxSize) {
      console.log(`Warning: Stack has already reached its capacity of ${this.maxSize}. Item "${data}" can not be added`);
      exit = true;
    }

    if (exit) {
      return undefined;
    }

    const node = new Node(data);

    node.next = this.top;

    this.size += 1;
    this.top = node;
  }

  pop() {
    if (!this.top) {
      return undefined;
    }

    const node = this.top

    this.top = node.next;
    this.size -= 1;

    return node;
  }

  peek() {
    return this.top || 'empty';
  }

  getSize() {
    return this.size;
  }

  getMaxSize() {
    return this.maxSize || 'no limit set';
  }

  printStack() {
    let node = this.top;

    console.log('Stack:');

    if(!node) {
      console.log('empty\n');
    } else {
      while (node) {
        console.log(node.data);
        node = node.next;
      }
    }
  }
}
