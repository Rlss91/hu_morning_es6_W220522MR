let number = 5;
let parity;

// if (number % 2 === 0) {
//   parity = true;
// } else {
//   parity = false;
// }
// parity = number % 2 === 0;
if (number % 2 === 0) {
  parity = "is even";
} else {
  parity = "is odd";
}
parity = number % 2 === 0 ? "is even" : "is odd";
//       condition        ? if the condition is true : if the condition is false
console.log("parity", parity);

//TK
let msg = 58 > 20 ? "The number bigger then 20" : "The number smaller then 20";
console.log("msg", msg);
