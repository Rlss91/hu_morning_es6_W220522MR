class Point {
  x;
  constructor(x) {
    this.x = x;
  }
}
class Point2D extends Point {
  y;
  constructor(x, y) {
    super(x);
    this.y = y;
  }
}
let p2d = new Point2D(5, 5);
console.log(p2d);

//TK 7
class Animal {
  name;
  maxAge;
  constructor(name, maxAge) {
    this.name = name;
    if (maxAge < 5) {
      this.maxAge = 8;
    } else {
      this.maxAge = maxAge;
    }
  }
}
class Mammal extends Animal {
  legs;
  constructor(legs, name, maxAge) {
    super(name, maxAge);
    this.legs = legs;
  }
}
let animal = new Animal("alis", 5);
console.log(animal);
