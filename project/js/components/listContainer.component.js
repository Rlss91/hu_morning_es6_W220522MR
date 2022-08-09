const initializeList = () => {
  let listContainer = document.getElementById("listContainer");
  listContainer.innerHTML = "";
  for (let realEstateItem of realEstateArr) {
    listContainer.innerHTML += `
        <div class="row mt-1 border-row">
            <div class="col">
                <img src="${realEstateItem.imgUrl}" alt="${realEstateItem.title}" />
            </div>
            <div class="col">
                ${realEstateItem.title}
            </div>
            <div class="col">
                ${realEstateItem.price}
            </div>
        </div>
        `;
  }
};
initializeList();
