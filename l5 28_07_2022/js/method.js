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
  carSummary() {
    console.log(`Model name:${this.modelName}`);
    console.log(`Engine size:${this.engineSize}`);
    console.log(`Horse power:${this.horsePower}`);
    console.log(`Number of seats:${this.numberOfSeats}`);
    console.log(`manufacturer price:${this.munifactiurPrice}`);
    console.log(`Year:${this.year}`);
    console.log(`Top speed:${this.topSpeed}`);
    console.log(`Number of wheels:${this.numberOfWheels}`);
    console.log(`Country:${this.country}`);
  }
  calcSellingPriceWithReturn() {
    return this.munifactiurPrice * 2.5 * 1.17;
  }
  calcSellingPriceWithConsole() {
    console.log(this.munifactiurPrice * 2.5 * 1.17);
  }
}

let archAngle = new CarModel("Arch Angle", 5, 50000, 1, 1000000, 2022, 1000);
console.log(archAngle);
archAngle.carSummary();
archAngle.calcSellingPriceWithConsole();
