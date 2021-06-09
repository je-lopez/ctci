import Node from './nodes/Node';

export default class Queue {
  constructor(maxSize) {
    this.front = null;
    this.size = 0;
    this.maxSize = maxSize || null;
  }

  enqueue(data) {
    let exit = false;

    // TODO: test the log: combine these two checks and use && for the log, perhaps like "data && console.log(...)" ?
    if (!data) {
      exit = true;
    }

    if (this.size === this.maxSize) {
      console.log(`Warning: Queue has already reached its capacity of ${this.maxSize}. Item "${data}" can not be added`);
      exit = true;
    }

    if (exit) {
      return undefined;
    }

    const node = new Node(data);
    let tail = this.front;

    if (!tail) {
      this.front = node;
    } else {
      while (tail.next) {
        tail = tail.next;
      }

      tail.next = node;
    }

    this.size += 1;
  }

  dequeue() {
    let node = this.front;

    if (!node) {
      return undefined;
    }

    this.front = node.next;
    this.size -= 1;

    return node;
  }

  front() {
    return this.front || 'empty'
  }

  getSize() {
    return this.size;
  }

  getMaxSize() {
    return this.maxSize || 'no limit set';
  }

  isEmpty() {
    return this.size === 0;
  }

  isFull() {
    return this.maxSize === this.size;
  }

  printQueue() {
    let node = this.front;

    console.log('Queue:')

    if (!top) {
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
