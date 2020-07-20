/**
 * The simple factorial function;
 */

// --------------------------------- My solution;
// First using the recursion;
const factorialWithRecursive = (n) => {
  if (n > 0) {
    return n * factorialWithRecursive(n - 1);
  }
  return 1;
};

// Second using the iteration
const factorialWithIterative = (n) => {
  let result = 1;
  for (let i = n; i > 0; i--) {
    result *= i;
  }
  return result;
};

console.log(factorialWithRecursive(10));
console.log(factorialWithRecursive(1));
console.log(factorialWithRecursive(2));
console.log(factorialWithIterative(10));
console.log(factorialWithIterative(1));
console.log(factorialWithIterative(2));

// Little track about debug;
// const t = () => {
//   debugger; // This line works when you are in a browser like chrome;
//   console.log("hi");
// };
// t();

// ------------------------------------- The course solution;

// function findFactorialIterative(number) {
//   let answer = 1;
//   // you actually no longer need the if statement because of the for loop
//   // if (number === 2) {
//   //   answer = 2;
//   // }
//   for (let i = 2; i <= number; i++) {
//     answer = answer * i;
//   }
//   return answer;
// }

// function findFactorialRecursive(number) {
//   if(number === 2) {
//     return 2;
//   }
//   return number * findFactorialRecursive(number - 1)
// }

// findFactorialIterative(5);
// findFactorialRecursive(5);
