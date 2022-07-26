let containerDivId = document.querySelector("#containerDivId");

containerDivId.innerHTML = `<span class="index-row-col">x</span>`;

for (let i = 1; i <= 10; i++) {
  containerDivId.innerHTML += `<span id="i_${i}" class="index-row-col">${i}</span>`;
}

for (let j = 1; j <= 10; j++) {
  containerDivId.innerHTML += `<span id="j_${j}" class="index-row-col">${j}</span>`;
  for (let i = 1; i <= 10; i++) {
    console.log("i", i, "j", j);
    // console.log(`${i} * ${j} = ${i * j}`);
    // console.log(i + " * " + j + " = " + i * j);
    containerDivId.innerHTML += `<span       
    onmouseover="handleMouseOverOnCell('#i_${i}', '#j_${j}')"
    onmouseout="handleMouseOutOnCell('#i_${i}', '#j_${j}')">${i * j}</span>`;
  }
}

const handleMouseOverOnCell = (iid, jid) => {
  console.log("handleMouseOverOnCell");
  document.querySelector(iid).style.backgroundColor = "yellow";
  document.querySelector(jid).style.backgroundColor = "yellow";
};
const handleMouseOutOnCell = (iid, jid) => {
  console.log("handleMouseOutOnCell");
  document.querySelector(iid).style.backgroundColor = "";
  document.querySelector(jid).style.backgroundColor = "";
};
