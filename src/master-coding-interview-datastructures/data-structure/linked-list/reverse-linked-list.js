/**
 * This demo is base on the privous implementation;
 */

class LinkedList {
  // Init the linked list;
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  // Append new value to the end;
  append(value) {
    this.tail.next = {
      value: value,
      next: null,
    };
    this.tail = this.tail.next;
    this.length++;
  }

  // Prepend value to the begin;
  prepend(value) {
    const headClone = this.head;
    this.head = {
      value: value,
      next: headClone,
    };
    // Do not forget the length!
    this.length++;
  }

  // Insert value to certain index;
  insert(index, value) {
    let currentNode = this.head;
    let currentIndex = 2;
    let tempNode;

    // There should have some error check, otherwise overflow will occur;
    if (index == 1) {
      tempNode = this.head;
      this.head = {
        value: value,
        next: tempNode,
      };
    } else {
      while (currentIndex !== index) {
        // Make sure when index bigger than linked list length, append value to the end
        if (currentNode.next) {
          currentNode = currentNode.next;
        }
        currentIndex++;
      }
      tempNode = currentNode;
      currentNode.next = {
        value: value,
        next: tempNode.next,
      };
    }
    this.length++;
    return this;
  }

  // Remove certain index value;
  remove(index) {
    // Simple error checking
    if (index > this.length) {
      return null;
    }
    let currentIndex = 2;
    let currentNode = this.head;
    // When
    if (index === 1) {
      this.head = this.head.next;
    } else {
      while (currentIndex !== index) {
        currentNode = currentNode.next;
        currentIndex++;
      }
      currentNode.next = currentNode.next.next;
    }
    this.length--;
    return this;
  }

  // Reverse the Linked list;
  reverse() {
    let result = new LinkedList(this.head.value);
    // result.head = this.tail;
    let currentNode = this.head;
    while (currentNode.next) {
      result.prepend(currentNode.next.value);
      currentNode = currentNode.next;
    }
    return result;
  }

  // Fetch all the value;
  fetchAll() {
    const values = [];
    let iterator = this.head;
    values.push(iterator.value);
    while (iterator.next) {
      iterator = iterator.next;
      values.push(iterator.value);
    }
    return values;
  }
}

const myList = new LinkedList(1);
// myList.append(2);
// myList.append(3);
// myList.append(4);
// myList.append(5);
// myList.append(6);
console.log(myList.fetchAll());
const reverseList = myList.reverse();
console.log(reverseList.fetchAll());

// ---------------------------------- The course solution;

// class LinkedList {
//   constructor(value) {
//       this.head = {
//           value: value,
//           next: null
//       };
//       this.tail = this.head;
//       this.length = 1;
//   }
//   append(value) {
//     const newNode = {
//       value: value,
//       next: null
//     }
//     console.log(newNode)
//     this.tail.next = newNode;
//     this.tail = newNode;
//     this.length++;
//     return this;
//   }
//   prepend(value) {
//     const newNode = {
//       value: value,
//       next: null
//     }
//     newNode.next = this.head;
//     this.head = newNode;
//     this.length++;
//     return this;
//   }
//   printList() {
//     const array = [];
//     let currentNode = this.head;
//     while(currentNode !== null){
//         array.push(currentNode.value)
//         currentNode = currentNode.next
//     }
//     return array;
//   }
//   insert(index, value){
//     //Check for proper parameters;
//     if(index >= this.length) {
//       console.log('yes')
//       return this.append(value);
//     }

//     const newNode = {
//       value: value,
//       next: null
//     }
//     const leader = this.traverseToIndex(index-1);
//     const holdingPointer = leader.next;
//     leader.next = newNode;
//     newNode.next = holdingPointer;
//     this.length++;
//     return this.printList();
//   }
//   traverseToIndex(index) {
//     //Check parameters
//     let counter = 0;
//     let currentNode = this.head;
//     while(counter !== index){
//       currentNode = currentNode.next;
//       counter++;
//     }
//     return currentNode;
//   }
//   remove(index) {
//     // Check Parameters
//     const leader = this.traverseToIndex(index-1);
//     const unwantedNode = leader.next;
//     leader.next = unwantedNode.next;
//     this.length--;
//     return this.printList();
//   }
//   reverse() {
//     if (!this.head.next) {
//       return this.head;
//     }
//     let first = this.head;
//     this.tail = this.head;
//     let second = first.next;

//     while(second) {
//       const temp = second.next;
//       second.next = first;
//       first = second;
//       second = temp;
//     }

//     this.head.next = null;
//     this.head = first;
//     return this.printList();
//   }
// }

// let myLinkedList = new LinkedList(10);
// myLinkedList.append(5)
// myLinkedList.append(16)
// myLinkedList.prepend(1)
// myLinkedList.printList()
// myLinkedList.insert(2, 99)
// myLinkedList.insert(20, 88)
// myLinkedList.printList()
// myLinkedList.remove(2)
// myLinkedList.reverse()
