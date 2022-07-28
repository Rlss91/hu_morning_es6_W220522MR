class Rect {
  top; //public
  left; //public
  #width; //private
  #height; //private

  constructor(top, left, width, height) {
    this.top = top;
    this.left = left;
    // this.#width = width;
    // this.#height = height;
    this.setNewWidth(width);
    this.setNewHeight(height);
  }
  setNewWidth(width) {
    if (width > 0) {
      this.#width = width;
    } else {
      this.#width = 1;
    }
  }
  setNewHeight(height) {
    if (height > 0) {
      this.#height = height;
    } else {
      this.#height = 1;
    }
  }
}
let rect = new Rect(0, 0, -10, 10);
// let rect = {
//     top: 0,
//     left: 0,
//     width:10,
//     height:10
// }

//! rect.#width = 5;
console.log(rect);
