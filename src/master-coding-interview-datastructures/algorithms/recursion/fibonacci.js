/**
 * Given a number N return the index value of the Fibonacci sequence, where the sequence is:
 *
 * 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
 * The pattern of the sequence is that each value is the sum of the 2 previous values,
 * that means that for N=5 → 2+3
 *
 * For example: fibonacciRecursive(6) should return 8
 */
//

// This is course solution;
// My solution do not working;
function fibonacciRecursive(n) {
  if (n < 2) {
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

// This is my solution;
function fibonacciIterative(n) {
  if (n < 2) {
    return n;
  }
  let result = 0;
  let temp1 = 0;
  let temp2 = 1;
  for (let i = 0; i < n - 1; i++) {
    result = temp1 + temp2;
    temp1 = temp2;
    temp2 = result;
  }
  return result;
}

console.log(fibonacciIterative(10));
console.log(fibonacciRecursive(10));

// ---------------------------- The course solution

// function fibonacciIterative(n){
//   let arr = [0, 1];
//   for (let i = 2; i < n + 1; i++){
//     arr.push(arr[i - 2] + arr[i -1]);
//   }
//  return arr[n];
// }
// fibonacciIterative(3);

// function fibonacciRecursive(n) {
//   if (n < 2){
//     return n;
//   }
//   return fibonacciRecursive(n - 1) + fibonacciRecursive (n - 2)
// }

// fibonacciRecursive(6)
