class Rect {
  top;
  left;
  width;
  height;
  constructor(top, left, width, height) {
    this.top = top;
    this.left = left;
    this.width = width;
    this.height = height;
  }
  static area(width, height) {
    return width * height;
  }
  static perimiter(width, height) {
    return 2 * (width + height);
  }
}
console.log(Rect.area(10, 10));
console.log(Rect.perimiter(10, 10));
