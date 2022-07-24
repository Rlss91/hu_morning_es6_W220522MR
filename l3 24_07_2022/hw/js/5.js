let containerDivId = document.querySelector("#containerDivId");

containerDivId.innerHTML = `<span class="index-row-col">x</span>`;

for (let i = 1; i <= 10; i++) {
  containerDivId.innerHTML += `<span class="index-row-col">${i}</span>`;
}

for (let j = 1; j <= 10; j++) {
  containerDivId.innerHTML += `<span class="index-row-col">${j}</span>`;
  for (let i = 1; i <= 10; i++) {
    console.log("i", i, "j", j);
    // console.log(`${i} * ${j} = ${i * j}`);
    // console.log(i + " * " + j + " = " + i * j);
    containerDivId.innerHTML += `<span>${i * j}</span>`;
  }
}
