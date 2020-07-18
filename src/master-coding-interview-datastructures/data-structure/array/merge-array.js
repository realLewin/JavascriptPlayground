/**
 * Given two array: [3, 4, 6], [1, 3, 23, 24];
 * They are sorted, merge them and still sorted => [1, 3, 3, 4, 6, 23, 24]
 */
const array1 = [3, 4, 6];
const array2 = [1, 3, 23, 24];

// -------------------- My solution:
const mergeArray = (array1, array2) => {
  const result = [];

  array1.forEach((a) => {
    result.push(a);
  });
  array2.forEach((a) => {
    result.push(a);
  });

  return result.sort((a, b) => a - b);
};
// ---------------------- Course Solution:
function mergeArray2(array1, array2) {
  //check the input:
  if (array1.length === 0) {
    return array2;
  }
  if (array2.length === 0) {
    return array1;
  }
  // The solution;
  const result = [];
  let item1 = array1[0];
  let item2 = array2[0];
  let i = 1;
  let j = 1;
  /**
   * This function have a fatal flaw, that item1 or item2 maybe undefined;
   * When item1 undefined, item1 < item2 will be false
   * Then the item2 will be pushed.
   */
  while (item1 || item2) {
    console.log(item1, item2);
    if (item1 < item2) {
      result.push(item1);
      item1 = array1[i];
      i++;
    } else {
      result.push(item2);
      item2 = array2[j];
      j++;
    }
  }
  return result;
}

console.log(mergeArray2(array1, array2));
// console.log("Test: " + undefined > 1);
