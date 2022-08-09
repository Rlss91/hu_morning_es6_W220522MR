let caruselaActivePhoto;

const initializeCaruselaImages = () => {
  let caruselaDiv = document.getElementById("caruselaDiv");
  for (let realEstateItem of realEstateArr) {
    caruselaDiv.innerHTML += `
    <img src="${realEstateItem.imgUrl}" class="d-none" alt="${realEstateItem.title}" id="carusela_img_${realEstateItem.id}">
    `;
  }
  document.getElementById("carusela_img_1").classList.remove("d-none"); //show the first image
  caruselaActivePhoto = 1; //save in memory that we show the first image
};
initializeCaruselaImages();

const nextCarselaImage = () => {
  document
    .getElementById(`carusela_img_${caruselaActivePhoto}`)
    .classList.add("d-none"); //hide the image by adding class d-none
  if (caruselaActivePhoto + 1 <= realEstateArr.length) {
    //this if check if there is next image
    caruselaActivePhoto++; //next image
  } else {
    //there is not images left
    //set first image
    caruselaActivePhoto = 1;
  }
  //   caruselaActivePhoto =
  //     caruselaActivePhoto + 1 <= realEstateArr.length
  //       ? caruselaActivePhoto++
  //       : (caruselaActivePhoto = 1);
  document
    .getElementById(`carusela_img_${caruselaActivePhoto}`)
    .classList.remove("d-none"); //show the image by removing class d-done
};

const previousCarselaImage = () => {
  document
    .getElementById(`carusela_img_${caruselaActivePhoto}`)
    .classList.add("d-none"); //hide the image by adding class d-none
  if (caruselaActivePhoto - 1 >= 1) {
    caruselaActivePhoto--;
  } else {
    //set last image
    caruselaActivePhoto = realEstateArr.length;
  }
  document
    .getElementById(`carusela_img_${caruselaActivePhoto}`)
    .classList.remove("d-none"); //show the image by removing class d-done
};
