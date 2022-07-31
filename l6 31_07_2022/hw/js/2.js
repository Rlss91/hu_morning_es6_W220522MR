class Computer {
  cpu;
  gpu;
  ram;
  constructor(cpu = "Pentium 3", gpu = "NVidia Voodoo 3", ram = "16 MB") {
    this.cpu = cpu;
    this.gpu = gpu;
    this.ram = ram;
  }
}
class Laptop extends Computer {
  screenSize;
  keyboard;
  battery;
  constructor(
    cpu,
    gpu,
    ram,
    screenSize = "15.6 inch",
    keyboard = "Retro Typewriter Keyboard, 7KEYS",
    battery = "7 ah"
  ) {
    super(cpu, gpu, ram);
    this.screenSize = screenSize;
    this.keyboard = keyboard;
    this.battery = battery;
  }
}
/*
    cpu,
    gpu,
    ram,
*/
// let lp = new Laptop(
//   undefined,
//   undefined,
//   undefined,
//   undefined,
//   undefined,
//   "12 ah"
// );
let lp = new Laptop("Pentium 4");
console.log(lp);
