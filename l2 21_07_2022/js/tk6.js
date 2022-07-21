let animals = ["dog"];
let arrayAher = [1];

const addNewItem = (arr, newItem) => {
  arr = [...arr, newItem];
  return arr;
};
animals = addNewItem(animals, "chiwawa");
console.log(animals);

arrayAher = addNewItem(arrayAher, 2);
console.log(arrayAher);
