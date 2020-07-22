/**
 * The simple dynamic program
 */

// Not using cache;
function add(n) {
  console.log("This will running long time");
  return n + 85;
}

// Using cache;
// This cache is in global scope;
let cache = {};
function memoizationAdd(n) {
  if (n in cache) {
    return cache[n];
  } else {
    console.log("This will running long time");
    cache[n] = n + 85; // cache the result to the cache;
    return cache[n];
  }
}

// console.log("1", memoizationAdd(10));
// console.log("2", memoizationAdd(10));

// Improve the above code using javascript closure;
function memoizationImprove() {
  let cache = {};
  return function (n) {
    if (n in cache) {
      return cache[n];
    } else {
      console.log("This will running long time");
      cache[n] = n + 85;
      return cache[n];
    }
  };
}

const mem = memoizationImprove();
console.log("1", mem(10));
console.log("2", mem(10));
