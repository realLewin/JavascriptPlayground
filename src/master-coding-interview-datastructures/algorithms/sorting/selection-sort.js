/**
 * The selection algorithm;
 */

// --------------------------------------- My solution

const input = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(input) {
  const length = input.length;
  for (let i = 0; i < length; i++) {
    let currentMin = input[i];
    let currentCursor = i;
    for (let j = i; j < length; j++) {
      if (currentMin > input[j]) {
        currentMin = input[j];
        currentCursor = j;
      }
    }
    let temp = input[i];
    input[i] = input[currentCursor];
    input[currentCursor] = temp;
  }
  return input;
}

console.log(selectionSort(input));

// --------------------------------------- The course solution;
// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// function selectionSort(array) {
//   const length = array.length;
//   for (let i = 0; i < length; i++) {
//     // set current index as minimum
//     let min = i;
//     let temp = array[i];
//     for (let j = i + 1; j < length; j++) {
//       if (array[j] < array[min]) {
//         //update minimum if current is lower that what we had previously
//         min = j;
//       }
//     }
//     array[i] = array[min];
//     array[min] = temp;
//   }
//   return array;
// }

// selectionSort(numbers);
// console.log(numbers);
