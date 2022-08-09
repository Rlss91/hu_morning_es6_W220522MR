import { displayInConsole, displayInConsole4 } from "./displayInConsole.js";
/* when we import function we will write only the name of the function */
import { A } from "./classToImport.js";
/* when we import class we will write only the name of the class */
displayInConsole();
displayInConsole4();
let a = new A(0, 0);
console.log(a);

const hi = (sdfsd) => {
  console.log("here");
};

document.getElementById("btn1").addEventListener("click", hi);
