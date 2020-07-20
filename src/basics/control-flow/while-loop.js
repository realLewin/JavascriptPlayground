// This work!
while (true) {
  if (true) {
    if (true) {
      console.log("I will break");
      break;
    }
  }
}

// This is work;
const test = () => {
  while (true) {
    if (true) {
      return true;
    }
  }
};
const result = test();
console.log(result);
