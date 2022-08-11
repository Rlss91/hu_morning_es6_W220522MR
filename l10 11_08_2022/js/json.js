let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let jsonArr = JSON.stringify(arr); // JSON.stringify convert array/obj to json string
console.log("jsonArr", jsonArr);
arr = JSON.parse(jsonArr); // JSON.parse convert json string to array/obj
console.log("arr", arr);
// let jsonArr = "[1, 2, 3, 4, 5, 6, 7, 8, 9]";

let obj = { name: "kenny", lastname: "maccormic", age: 8, isAlive: true };

let jsonObj = JSON.stringify(obj);
console.log("jsonObj", jsonObj);
// let jsonObj =
//   '{ "name": "kenny", "lastname": "maccormic", "age": 8, "isAlive": true }';

let arrayObj = [
  {
    title: "chair",
    price: 200,
    isOnSale: false,
  },
  {
    title: "table",
    price: 300,
    isOnSale: false,
  },
];

let jsonArrayObj = JSON.stringify(arrayObj);
console.log("jsonArrayObj", jsonArrayObj);
// let jsonArrayObj =
//   '[{"title": "chair", "price": 200, "isOnSale": false}, {"title": "table", "price": 300, "isOnSale": false}]';
