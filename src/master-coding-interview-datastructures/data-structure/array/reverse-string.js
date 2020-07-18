/**
 *  Create a function that reverses a string;
 *  'hi there' should be : 'ereht ih';
 */
let givenString = "Hello World!";

// One input is string, one output is string;

// Solution 1:
function reverseStringOne(str) {
  // Check the input first;
  if (!str || str.length < 2 || typeof str != "string") {
    return "invalid input string";
  }

  const result = [];
  for (let i = str.length - 1; i >= 0; i--) {
    result.push(str[i]);
  }

  return result.join(""); // Or use result.toString();
}

// Solution 2: use build-in method;
function reverseStringTwo(str) {
  return str.split("").reverse().join("");
}

// Solution 3: use ES6 function syntax, more readable;
const reverse = (str) => [...str].reverse().join("");

console.log(reverse(givenString));
