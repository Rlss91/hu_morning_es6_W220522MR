let animalsArr = ["dog", "unicorn"];

let list = document.querySelector("#list");

for (let item of animalsArr) {
  list.innerHTML += `<li>${item}</li>`;
}

const handleAddNewAnimal = () => {
  let newAnimalInput = document.querySelector("#newAnimalInput").value;
  animalArr = [...animalsArr, newAnimalInput];
  list.innerHTML += `<li>${newAnimalInput}</li>`;
};
