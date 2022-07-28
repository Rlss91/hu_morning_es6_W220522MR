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
  constructor(
    modelName,
    engineSize,
    horsePower,
    numberOfSeats,
    munifactiurPrice,
    year,
    topSpeed
  ) {
    this.modelName = modelName;
    this.engineSize = engineSize;
    this.horsePower = horsePower;
    this.numberOfSeats = numberOfSeats;
    this.munifactiurPrice = munifactiurPrice;
    this.year = year;
    this.topSpeed = topSpeed;
  }
}

let archAngle = new CarModel("Arch Angle", 5, 50000, 1, 1000000, 2022, 1000);
console.log(archAngle);
