/**
 * This question from Google;
 * Given an array, find the first recurring character;
 * if array = [1, 3, 5, 1, 4, 3], return 1,
 * if array = [1, 2, 3], return undefined;
 */

const array1 = [1, 3, 5, 1, 4, 3];
const array2 = [1, 2, 3];
const array3 = ["a", "b", "v", "b"]; //just for fun!
const array4 = [2, 5, 5, 2, 3, 5]; // This one will break the solution3()

// ---------------------------------- My solution(inspired by the course solution);
// O(n)
const solution = (arr) => {
  let map = {};
  // Convert the array to hash table;
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]]) {
      return arr[i];
    }
    map[arr[i]] = true;
  }
  return undefined;
};

console.log(solution(array1));
console.log(solution(array2));
console.log(solution(array3));
console.log(solution(array4));

// Some pitfall here: if first one in the array is the first recurring char, then map[arr[0]] = 0;
// if use the map[arr[i]] for the loop condition, 0 == false, so use map[arr[i]] === undefined
// for the loop condition;
// --------------------------------- course solution:
// O(n)
function solution2(arr) {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]] === undefined) {
      map[arr[i]] = i;
    } else {
      return arr[i];
    }
  }
  return undefined;
}

console.log(solution2(array1));
console.log(solution2(array2));
console.log(solution2(array3));
console.log(solution2(array4));

// ---------------------------- course solution brute(the nested loop);
//O(n^2)
// don't work when array4 apply
function solution3(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] === input[j]) {
        return input[i];
      }
    }
  }
  return undefined;
}
console.log(solution3(array1));
console.log(solution3(array2));
console.log(solution3(array3));
console.log(solution3(array4));
