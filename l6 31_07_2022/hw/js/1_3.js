class Computer {
  cpu;
  gpu;
  #ram;
  constructor(cpu = "Pentium 3", gpu = "NVidia Voodoo 3", ram = 16) {
    this.cpu = cpu;
    this.gpu = gpu;
    this.setNewRam(ram);
  }
  setNewRam(ram) {
    if (ram > 0) {
      this.#ram = ram;
    } else {
      this.#ram = 16;
    }
  }
}
let comp = new Computer("I9", "NVidia 3090 Ti", -128000);

console.log(comp);
