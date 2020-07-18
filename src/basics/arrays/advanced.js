// This is false, because array is not primitive type;
console.log([] === []);

// This refer to the object it inside;
const myObject = {
  a: () => {
    console.log(this);
  },
};
