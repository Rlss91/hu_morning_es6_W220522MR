// let arr = [1, 2, 3, 4];
let arr = [{ n: 1 }, { n: 2 }, { n: 3 }, { n: 4 }];

let newArr = arr.filter((item) => item.n > 2);

console.log(newArr);

let objArr = [
  { name: "kenny", lname: "mc" },
  { name: "Max", lname: "Elmakies" },
  { lname: "gordon" },
];

let newArr2 = objArr.filter((item) => item.hasOwnProperty("name"));

console.log(newArr2);
