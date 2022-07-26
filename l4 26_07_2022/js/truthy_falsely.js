/*
    falsey:
        0
        -0
        ""
        ''
        ``
        NaN - we need isNaN() function to check if the value is NaN or not
        null
        false
        undefined
*/

const handleNameChange = () => {
  let nameInput = document.getElementById("nameInput").value;
  if (nameInput) {
    console.log("value has something");
  } else {
    console.log("value is empty");
  }
};

let number = 7;
// will execute untill the first true
if (number === 5 || number === 7 || number === 9) {
}
//will execute untill the first false
if (number === 5 && number === 7 && number === 9) {
}

const add5 = (n1) => {
  return n1 + 5;
};

let someNumber = 5;
// if (isNaN(parseFloat(someNumber)) === false) {
//   add5(someNumber);
// }
console.log(parseFloat(someNumber) && add5(someNumber));
