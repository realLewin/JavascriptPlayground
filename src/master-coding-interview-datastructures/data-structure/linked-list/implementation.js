/**
 * prepend: O(1)
 * append:  O(1)
 * insert:  O(n)
 * search:  O(n)
 * delete:  O(n)
 *
 * javascript do not have build-in linked list!
 * This demo is singly linked list;
 */

// ------------------------------------- My solution;
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
    // This is worry, since this.tail.next = null, you can not assign value to null;
    // this.tail.next.value = value;
    // this.tail.next.next = null;
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

const myLink = new LinkedList(10);
myLink.append(16);
myLink.append(5);
myLink.prepend(1);
myLink.insert(1, 77);
myLink.insert(22, 77); // Still work;
myLink.insert(3, 77);
myLink.remove(3);
myLink.remove(1);
myLink.remove(200); // This return null;
console.log(myLink.fetchAll());

// ----------------------------------- The course solution;

// class LinkedList {
//   constructor(value) {
//     this.head = {
//       value: value,
//       next: null
//     };
//     this.tail = this.head;
//     this.length = 1;
//   }
//   append(value) {
//     const newNode = {
//       value: value,
//       next: null
//     }
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
// }

// let myLinkedList = new LinkedList(10);
// myLinkedList.append(5);
// myLinkedList.append(16);myLinkedList.prepend(1);
// myLinkedList.insert(2, 99);
// myLinkedList.insert(20, 88);
// myLinkedList.remove(2);
