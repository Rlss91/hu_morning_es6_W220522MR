//Shlomo hyper sports
let aventador = {
  modelName: "Aventador",
  numberOfWheels: 4,
  engineSize: 5,
  horsePower: 10000,
  numberOfSeats: 2,
  munifactiurPrice: 500000,
  country: "italy",
  year: 2011,
  topSpeed: 400,
};
let urus = {
  modelName: "Urus",
  numberOfWheels: 4,
  engineSize: 3,
  horsePower: 5000,
  numberOfSeats: 4,
  munifactiurPrice: 500000,
  country: "italy",
  year: 2018,
  topSpeed: 305,
};
console.log(aventador.numberOfWheels);
console.log(urus.numberOfWheels);

// template that tells javascript how we want our object
class CarModel {
  modelName;
  numberOfWheels = 4; // default value
  engineSize;
  horsePower;
  numberOfSeats;
  munifactiurPrice;
  country = "Italy"; // default value
  year;
  topSpeed;
}

// create object from class
let urus2 = new CarModel();
urus2.year = 2022; // change values
console.log("urus2", urus2);
