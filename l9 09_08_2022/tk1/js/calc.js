import { calcAB } from "./exportClac.js";

const handleAddCalcClick = () => {
  document.getElementById("resultDiv").innerText = calcAB(
    +document.getElementById("aInput").value,
    +document.getElementById("bInput").value,
    "+"
  );
};

document.getElementById("addBtn").addEventListener("click", handleAddCalcClick);
