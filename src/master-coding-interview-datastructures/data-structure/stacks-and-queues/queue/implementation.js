/**
 * lookup : O(n)
 * enqueue: O(1)
 * dequeue: O(1)
 * peek   : O(1)
 *
 * The implementation of queue;
 */

// ----------------------------- My solution;
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    if (this.length === 0) {
      return null;
    }
    return this.first.value;
  }

  enqueue(value) {
    if (this.length === 0) {
      this.first = new Node(value);
      this.last = this.first;
      this.first.next = this.last;
    } else {
      let newNode = new Node(value);
      let tempNode = this.last;
      this.last = newNode;
      tempNode.next = this.last;
    }
    this.length++;
    return this.last.value;
  }

  dequeue() {
    if (this.length === 0) {
      return null;
    }
    if (this.length === 1) {
      const result = this.first.value;
      this.first = null;
      this.length--;
      return result;
    }
    if (this.first.next) {
      const result = this.first.value;
      this.first = this.first.next;
      this.length--;
      return result;
    }
  }

  isEmpty() {}
}

const myQueue = new Queue();
console.log(myQueue.enqueue("goo"));
console.log(myQueue.enqueue("face"));
console.log(myQueue.peek());
console.log(myQueue.dequeue());
console.log(myQueue.enqueue("ude"));
console.log(myQueue.peek());
console.log(myQueue.enqueue("twi"));
console.log(myQueue.dequeue());
console.log(myQueue.peek());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());

// ------------------------------------ The course solution;
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Queue {
//   constructor(){
//     this.first = null;
//     this.last = null;
//     this.length = 0;
//   }
//   peek() {
//     return this.first;
//   }
//   enqueue(value){
//     const newNode = new Node(value);
//     if (this.length === 0) {
//       this.first = newNode;
//       this.last = newNode;
//     } else {
//       this.last.next = newNode;
//       this.last = newNode;
//     }
//     this.length++;
//     return this;
//   }
//   dequeue(){
//     if (!this.first) {
//       return null;
//     }
//     if (this.first === this.last) {
//       this.last = null;
//     }
//     const holdingPointer = this.first;
//     this.first = this.first.next;
//     this.length--;
//     return this;
//   }
//   //isEmpty;
// }

// const myQueue = new Queue();
// myQueue.peek();
// myQueue.enqueue('Joy');
// myQueue.enqueue('Matt');
// myQueue.enqueue('Pavel');
// myQueue.peek();
// myQueue.dequeue();
// myQueue.dequeue();
// myQueue.dequeue();
// myQueue.peek();
