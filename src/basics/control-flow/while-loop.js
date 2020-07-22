// This work!
// while (true) {
//   if (true) {
//     if (true) {
//       console.log("I will break");
//       break;
//     }
//   }
// }

// This is work;
// const test = () => {
//   while (true) {
//     if (true) {
//       return true;
//     }
//   }
// };
// const result = test();
// console.log(result);

// This not work, will be infinite loop;
// const test2 = () => {
//   let result;
//   while (true) {
//     for (let i = 0; i < 10; i++) {
//       if (i === 8) {
//         break;
//       }
//     }
//     result = "not work";
//   }
//   result = "work";
//   return result;
// };

// console.log(test2());
