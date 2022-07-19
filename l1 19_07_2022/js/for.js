let arr = [
  { _id: 1, name: "kenny" },
  { _id: 2, name: "stan" },
  { _id: 3, name: "kyle" },
  { _id: 4, name: "eric" },
  { _id: 5, name: "john" },
];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

for (let item of arr) {
  console.log("item", item);
}

// for (let i = 0; i < arr.length; i++) {
//   console.log(i);
// }

for (let index in arr) {
  console.log("index", index);
}
