/**
 * The implementation of bubble sort;
 */

const input = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// ----------------------------------------------- My solution;
// This input is mutable;
function bubbleSort(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length - 1; j++) {
      if (input[j] > input[j + 1]) {
        let temp = input[j];
        input[j] = input[j + 1];
        input[j + 1] = temp;
      }
    }
  }
  return input;
}

console.log(bubbleSort(input));

// ----------------------------------------------- The course solution
// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// the (array[length -1] > array[length]) === false; because array[length] === undefined;
// function bubbleSort(array) {
//   const length = array.length;
//   for (let i = 0; i < length; i++) {
//     for (let j = 0; j < length; j++) {
//       if(array[j] > array[j+1]) {
//         //Swap the numbers
//         let temp = array[j]
//         array[j] = array[j+1];
//         array[j+1] = temp;
//       }
//     }
//   }
// }

// bubbleSort(numbers);
// console.log(numbers);
