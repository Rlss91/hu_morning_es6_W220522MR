class Animal {
  name;
  legs;
  maxAge;
}

class Mammals extends Animal {
  tail;
}

let dog = new Mammals();

console.log(dog);

//TK 6
class Point {
  x;
}
class Point2D extends Point {
  y;
}
let p2d = new Point2D();
console.log(p2d);
