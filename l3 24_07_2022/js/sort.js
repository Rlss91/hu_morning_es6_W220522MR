let arr = [1, 2, 6, 4, 5, 8];
arr.sort(); // from lower to higher
console.log(arr);
arr.sort((item1, item2) => item2 - item1); // from higher to lower
console.log(arr);
