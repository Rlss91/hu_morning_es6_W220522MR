export const calcAB = (a, b, op) => {
  switch (op) {
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    case "+":
    default:
      return a + b;
  }
};
