const initializeCardsGrid = () => {
  for (let realEstateItem of realEstateArr) {
    document.getElementById("cardsGridContainer").innerHTML += `
        <div class="col">
            <div class="card">
            <img src="${realEstateItem.imgUrl}" class="card-img-top" alt="${realEstateItem.title}">
            <div class="card-body">
                <h5 class="card-title">${realEstateItem.price}$</h5>
                <p class="card-text">${realEstateItem.title}</p>
            </div>
            </div>
        </div>
        `;
  }
};
initializeCardsGrid();
