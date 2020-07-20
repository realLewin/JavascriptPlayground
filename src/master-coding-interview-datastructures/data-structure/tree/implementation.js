// class Node {
/**
 * The binary search tree implementation;
 */

// --------------------------------------- My solution
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  // Insert method;
  insert(value) {
    if (this.root === null) {
      this.root = new Node(value);
    } else {
      let currentNode = this.root;
      while (true) {
        if (value > currentNode.value) {
          if (currentNode.right !== null) {
            currentNode = currentNode.right;
            continue; // This line not necessary
          } else {
            currentNode.right = new Node(value);
            break;
          }
        } else {
          if (currentNode.left !== null) {
            currentNode = currentNode.left;
            continue; // This line not necessary
          } else {
            currentNode.left = new Node(value);
            break;
          }
        }
      }
    }
  }

  // The search method
  lookup(value) {
    // Do some simple check;
    if (this.root === null) {
      return false;
    }
    // The main code
    let currentNode = this.root;
    while (true) {
      if (value === currentNode.value) {
        return true;
      } else if (value > currentNode.value) {
        if (currentNode.right === null) {
          break;
        } else {
          currentNode = currentNode.right;
        }
      } else if (value < currentNode.value) {
        if (currentNode.left === null) {
          break;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        // When the input is not a suitable value;(like a string when value is number,
        // avoid the infinite loop)
        return false;
      }
    }
    return false;
  }

  // Remove method
  remove(value) {
    // This is kind of chanllenge;
    // Maybe solve it one day;
  }
}
// The function the check the tree node value;
// This method write by the course teacher;
function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

const tree = new BST();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
const result = JSON.stringify(traverse(tree.root));
// console.log(result);

console.log(tree.lookup(4));
console.log(tree.lookup(null)); // false;
console.log(tree.lookup(170));
console.log(tree.lookup(20));
console.log(tree.lookup(100));
console.log(tree.lookup(4)); // true;
console.log(tree.lookup("aasd")); // false;

//     9
//  4     20
//1  6  15  170

// ---------------------------------------- The course solution;
// class Node {
//   constructor(value){
//     this.left = null;
//     this.right = null;
//     this.value = value;
//   }
// }

// class BinarySearchTree {
//   constructor(){
//     this.root = null;
//   }
//   insert(value){
//     const newNode = new Node(value);
//     if (this.root === null) {
//       this.root = newNode;
//     } else {
//       let currentNode = this.root;
//       while(true){
//         if(value < currentNode.value){
//           //Left
//           if(!currentNode.left){
//             currentNode.left = newNode;
//             return this;
//           }
//           currentNode = currentNode.left;
//         } else {
//           //Right
//           if(!currentNode.right){
//             currentNode.right = newNode;
//             return this;
//           }
//           currentNode = currentNode.right;
//         }
//       }
//     }
//   }
//   lookup(value){
//     if (!this.root) {
//       return false;
//     }
//     let currentNode = this.root;
//     while(currentNode){
//       if(value < currentNode.value){
//         currentNode = currentNode.left;
//       } else if(value > currentNode.value){
//         currentNode = currentNode.right;
//       } else if (currentNode.value === value) {
//         return currentNode;
//       }
//     }
//     return null
//   }
//   remove(value) {
//     if (!this.root) {
//       return false;
//     }
//     let currentNode = this.root;
//     let parentNode = null;
//     while(currentNode){
//       if(value < currentNode.value){
//         parentNode = currentNode;
//         currentNode = currentNode.left;
//       } else if(value > currentNode.value){
//         parentNode = currentNode;
//         currentNode = currentNode.right;
//       } else if (currentNode.value === value) {
//         //We have a match, get to work!

//         //Option 1: No right child:
//         if (currentNode.right === null) {
//           if (parentNode === null) {
//             this.root = currentNode.left;
//           } else {

//             //if parent > current value, make current left child a child of parent
//             if(currentNode.value < parentNode.value) {
//               parentNode.left = currentNode.left;

//             //if parent < current value, make left child a right child of parent
//             } else if(currentNode.value > parentNode.value) {
//               parentNode.right = currentNode.left;
//             }
//           }

//         //Option 2: Right child which doesnt have a left child
//         } else if (currentNode.right.left === null) {
//           currentNode.right.left = currentNode.left;
//           if(parentNode === null) {
//             this.root = currentNode.right;
//           } else {

//             //if parent > current, make right child of the left the parent
//             if(currentNode.value < parentNode.value) {
//               parentNode.left = currentNode.right;

//             //if parent < current, make right child a right child of the parent
//             } else if (currentNode.value > parentNode.value) {
//               parentNode.right = currentNode.right;
//             }
//           }

//         //Option 3: Right child that has a left child
//         } else {

//           //find the Right child's left most child
//           let leftmost = currentNode.right.left;
//           let leftmostParent = currentNode.right;
//           while(leftmost.left !== null) {
//             leftmostParent = leftmost;
//             leftmost = leftmost.left;
//           }

//           //Parent's left subtree is now leftmost's right subtree
//           leftmostParent.left = leftmost.right;
//           leftmost.left = currentNode.left;
//           leftmost.right = currentNode.right;

//           if(parentNode === null) {
//             this.root = leftmost;
//           } else {
//             if(currentNode.value < parentNode.value) {
//               parentNode.left = leftmost;
//             } else if(currentNode.value > parentNode.value) {
//               parentNode.right = leftmost;
//             }
//           }
//         }
//       return true;
//       }
//     }
//   }
// }

// const tree = new BinarySearchTree();
// tree.insert(9)
// tree.insert(4)
// tree.insert(6)
// tree.insert(20)
// tree.insert(170)
// tree.insert(15)
// tree.insert(1)
// tree.remove(170)
// JSON.stringify(traverse(tree.root))

// //     9
// //  4     20
// //1  6  15  170

// function traverse(node) {
//   const tree = { value: node.value };
//   tree.left = node.left === null ? null : traverse(node.left);
//   tree.right = node.right === null ? null : traverse(node.right);
//   return tree;
// }
