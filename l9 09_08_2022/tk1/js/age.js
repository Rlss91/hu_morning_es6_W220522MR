import { calcAB } from "./exportClac.js";

const handleAgeChange = (event) => {
  //   console.log(event);
  //   event.target.style.backgroundColor = "black";
  //   console.log(event.target.value);
  event.target.value = calcAB(+event.target.value, 5, "+");
};

document.getElementById("ageInput").addEventListener("change", handleAgeChange);
