/**
 * The fibonacci algorithms using dynamic programming;
 * The fibonacci sequence:
 * 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181,
 * 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, ...
 */

// ------------------------------------------- My solution;
// The slow version;       O(2^n)
let counter1 = 0;
function fibonacci(n) {
  counter1++;
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// The dynamic programming version;      O(n);
let counter2 = 0;
function fibonacci2() {
  let cache = {};
  return function fib(n) {
    counter2++;
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
}

// The bottom-up solution;    O(n);
function fibonacci3(n) {
  let result = [0, 1];
  for (let i = 2; i <= n; i++) {
    result.push(result[i - 2] + result[i - 1]);
  }
  return result.pop();
}

console.log("1", fibonacci(40));
console.log("counter1", counter1); // counter1 === 331160281;

const fasterFib = fibonacci2();
console.log("2", fasterFib(40));
console.log("counter2", counter2); // counter2 === 79;

console.log(fibonacci3(40));
