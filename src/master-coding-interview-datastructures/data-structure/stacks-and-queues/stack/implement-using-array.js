/**
 * The implementation of stack using array;
 */

// ----------------------------------- My solution
class Stack {
  constructor() {
    this.data = [];
  }

  peek() {
    return this.data[this.data.length - 1];
  }

  push(value) {
    this.data.push(value);
  }

  pop() {
    return this.data.pop();
  }
}

const myStack = new Stack();
myStack.push("s");
myStack.push("a");
myStack.push("g");
myStack.push("w");
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
// This will log undefined;
console.log(myStack.pop());

// -------------------------------- The course solution
// class Stack {
//   constructor(){
//     this.array = [];
//   }
//   peek() {
//     return this.array[this.array.length-1];
//   }
//   push(value){
//     this.array.push(value);
//     return this;
//   }
//   pop(){
//     this.array.pop();
//     return this;
//   }
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
