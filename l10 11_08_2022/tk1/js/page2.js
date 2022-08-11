const initFavorite = () => {
  let favoriteObjJSON = localStorage.getItem("favoriteObj");
  //if the data in ls then it will set the data in favoriteObjJSON
  //else it will set null in favoriteObjJSON
  console.log("favoriteObjJSON", favoriteObjJSON);
  //   if (favoriteObjJSON !== null) {
  if (favoriteObjJSON) {
    //if not null then fill the list
    let favoriteObj = JSON.parse(favoriteObjJSON); // convert from json string to obj
    document.querySelector("#animalInput").innerText = favoriteObj.animalInput;
    document.querySelector("#foodInput").innerText = favoriteObj.foodInput;
    document.querySelector("#gameInput").innerText = favoriteObj.gameInput;
  }
};
initFavorite();
