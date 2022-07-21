/* arrays */
let arr = [1, 2, 3, 4];

// arr.push(5);
// arr.push(6);
// arr.push(7);
// arr.push(8);
// arr.push(9);
// arr.push(10);

// arr = [...arr, 5];
// arr = [...arr, 5, 6, 7, 8, 9, 10];

// arr.unshift(0)
// arr = [0, ...arr];

arr = [0, ...arr, 5, 6, 7, 8, 9, 10];
// arr = [0, 1,2,3,4, 5, 6, 7, 8, 9, 10];

// arr = [0, arr, 5, 6, 7, 8, 9, 10];
// arr = [0,  [1, 2, 3, 4], 5, 6, 7, 8, 9, 10];

/* objects */
let obj1 = {
  name: "kenny",
  lname: "mc",
};
let obj2 = {
  age: 10,
  adr: "usa",
};
obj1 = { ...obj1, ...obj2, gender: "M" };
console.log("obj1", obj1);
