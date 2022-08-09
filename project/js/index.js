console.log(realEstateArr);
let selectModeDisplayNow = "caruselaContainer";
const handleSelectModeClick = (selectModeNum) => {
  document.getElementById(selectModeDisplayNow).classList.add("d-none");
  switch (selectModeNum) {
    case 1:
      //   document.getElementById("caruselaContainer").classList.remove("d-none");
      selectModeDisplayNow = "caruselaContainer";
      break;
    case 2:
      //   document.getElementById("cardsGridContainer").classList.remove("d-none");
      selectModeDisplayNow = "cardsGridContainer";
      break;
    case 3:
      //   document.getElementById("listContainer").classList.remove("d-none");
      selectModeDisplayNow = "listContainer";
      break;
  }
  document.getElementById(selectModeDisplayNow).classList.remove("d-none");
};

const handleSortClick = (sortDir) => {
  if (sortDir == "⬇️") {
    realEstateArr.sort((a, b) => a.price - b.price);
  }
  if (sortDir == "⬆️") {
    realEstateArr.sort((a, b) => b.price - a.price);
  }
  initializeList();
  initializeCardsGrid();
};

const handleFilterByNameInput = (event) => {
  let value = event.target.value;
  /*
  filter will create new array and remove items that we dont need,
  so to prevent from filter to remove the unwanted items,
  we created donotTouchRealEstateArr to store the RealEstates.
  if we filter from realEstateArr directly 
  the first filter will work, he will remove the unwanted items, but
  on the secound filter the items already removed and it will filter
  from the items that was saved from the previous filter.
  */
  realEstateArr = donotTouchRealEstateArr.filter((item) =>
    item.title.includes(value)
  );
  //   realEstateArr = donotTouchRealEstateArr.filter((item) => {
  //     return item.title.includes(value);
  //   });
  initializeList();
  initializeCardsGrid();
};
