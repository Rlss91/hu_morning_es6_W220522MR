let animalsArr = ["dog", "chupakabra", "tiger", "fox", "chiwawa", "unicorn"];

const printAnimals = (animalsArrArg) => {
  for (let animalItem of animalsArrArg) {
    console.log(animalItem);
  }
};
printAnimals(animalsArr);

const printAnimals2 = () => {
  for (let animalItem of animalsArr) {
    console.log(animalItem);
  }
};
printAnimals2();
