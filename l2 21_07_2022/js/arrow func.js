function oldWay() {}

const newWay = () => {};

const count = (somearr) => {
  let c = 0;
  while (somearr[c] != undefined) {
    c++;
  }
  return c;
};

count([1, 2, 3]);
console.log(typeof count);

const oneLineFunc = () => 1 + 1;
//! if the function only one line!!!
// function oneLineFunc() {
//   return 1 + 1;
// }

const someFunc = (someArg) => {
  someArg();
};

const printHello = () => {
  console.log("hello");
};

// printHello();
someFunc(printHello);

const pi = 3.14;

function printPi(arg) {
  console.log(arg);
}

printPi(pi);
