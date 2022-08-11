const handleFormSubmit = (ev) => {
  ev.preventDefault();
  //   let animalInput = document.querySelector("#animalInput").value;
  //   let foodInput = document.querySelector("#foodInput").value;
  //   let gameInput = document.querySelector("#gameInput").value;
  let favoriteObj = {
    animalInput: document.querySelector("#animalInput").value,
    foodInput: document.querySelector("#foodInput").value,
    gameInput: document.querySelector("#gameInput").value,
  };
  let favoriteObjJSON = JSON.stringify(favoriteObj); // convert to json string
  localStorage.setItem("favoriteObj", favoriteObjJSON);
  console.log(ev);
};
