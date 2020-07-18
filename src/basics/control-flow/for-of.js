const findNum = (nums) => {
  for (let num of nums) {
    if (num === 7) {
      console.log("find it");
      break;
    }
  }
};

findNum([3, 4, 5, 6, 6, 7, 9]);
