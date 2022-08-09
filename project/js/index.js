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
