/**
 * lookup: O(n)
 * pop   : O(1)
 * push  : O(1)
 * peek  : O(1)
 *
 * This is simple the implementation of stack
 * principle: LIFO (last in first out)
 */

// ---------------------------------------- My solution
// Node class
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Stack class
class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  // Method for peek the top element
  peek() {
    return this.top.value;
  }

  push(value) {
    if (this.length === 0) {
      // Do the initialize
      this.bottom = new Node(value);
      this.top = this.bottom;
      this.bottom.next = this.top;
    } else {
      // Push new value to the begin of the linked list;
      let tempNode = this.top;
      this.top = new Node(value);
      this.top.next = tempNode;
    }
    this.length++;
    return this.top.value;
  }

  pop() {
    // Do some check
    if (!this.top) {
      return null;
    }
    const result = this.top.value;
    this.top = this.top.next;
    this.length--;
    return result;
  }

  // Optional method isEmpty();
}

const myStack = new Stack();
console.log(myStack.push("s"));
console.log(myStack.push("a"));
console.log(myStack.push("g"));
console.log(myStack.push("w"));
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
// This one will cause problem, the bottom node will never remove;
// The course solution solve it.
console.log(myStack.pop());

/**
 * When the first time I implement these method, I push the new value to the tail of the linked list
 * , so this is worry.
 */

// // Method for push value to the top
// push(value) {
//   if (this.length === 0) {
//     this.bottom = new Node(value);
//     this.top = this.bottom;
//     this.bottom.next = this.top;
//   } else {
//      //I pushed the new value to the tail of the linked list, It is worry;
//     tempNode = this.top;
//     this.top = new Node(value);
//     tempNode.next = this.top;
//   }
//   this.length++;
//   return this.peek();
// }

// // Method for remove the top element
// pop() {
//   const result = this.top.value;
//   delete this.top;
//   return result;
// }

// ------------------------------------- The course solution
// class Node {
//   constructor(value){
//     this.value = value;
//     this.next = null;
//   }
// }

// class Stack {
//   constructor(){
//     this.top = null;
//     this.bottom = null;
//     this.length = 0;
//   }
//   peek() {
//     return this.top;
//   }
//   push(value){
//     const newNode = new Node(value);
//     if (this.length === 0) {
//       this.top = newNode;
//       this.bottom = newNode;
//     } else {
//       const holdingPointer = this.top;
//       this.top = newNode;
//       this.top.next = holdingPointer;
//     }
//     this.length++;
//     return this;
//   }
//   pop(){
//     if (!this.top) {
//       return null;
//     }
//     if (this.top === this.bottom) {
//       this.bottom = null;
//     }
//     const holdingPointer = this.top;
//     this.top = this.top.next;
//     this.length--;
//     return this;
//   }
//   //isEmpty
// }

// const myStack = new Stack();
// myStack.peek();
// myStack.push('google');
// myStack.push('udemy');
// myStack.push('discord');
// myStack.peek();
// myStack.pop();
// myStack.pop();
// myStack.pop();
