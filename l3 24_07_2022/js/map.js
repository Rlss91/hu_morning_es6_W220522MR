let arr = [1, 2, 3];
let newArr = [];
// for (let item of arr) {
//   newArr = [...newArr, item + 5];
// }
// newArr = arr.map((item) => {
//   return item + 5;
// });
newArr = arr.map((item) => item + 5);
// newArr = [6, 7, 8]

//TK
let tkArr = [1, 2, 3];
let newTkArr = tkArr.map((item) => item);
console.log(newTkArr);
