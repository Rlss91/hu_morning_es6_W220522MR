const calcN1N2 = (n1 = 1, n2 = 1) => {
  return n1 + n2;
};

//v
console.log(calcN1N2()); //console.log(calcN1N2(1, 1));
console.log(calcN1N2(5)); //console.log(calcN1N2(5, 1));
console.log(calcN1N2(2, 2)); //console.log(calcN1N2(2, 2));
//x
// console.log(calcN1N2(, 2));
// console.log(calcN1N2(n1, 2));

// TK 2
const printFullName = (firstname = "Kenny", lastname = "McCormick") => {
  console.log(`${firstname} ${lastname}`);
};

printFullName(undefined, "smith");
printFullName("john");
printFullName("john", "wick");
