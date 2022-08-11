/*
    this file will initialize the data
    we use this file to simulate data from server
*/

let realEstateArr;

let donotTouchRealEstateArr;

const initRealestateArrays = () => {
  realEstateArr = localStorage.getItem("realEstateArr");
  if (realEstateArr) {
    realEstateArr = JSON.parse(realEstateArr);
  } else {
    realEstateArr = [];
    //[{"title":"villa","price":200000,"imgUrl":"http://127.0.0.1:5500/project/assets/imgs/house-gf551a4fec_1920.jpg","id":1},{"title":"mantion","price":2000000,"imgUrl":"http://127.0.0.1:5500/project/assets/imgs/pexels-chris-goodwin-32870.jpg","id":2},{"title":"snowwhite","price":150001,"imgUrl":"http://127.0.0.1:5500/project/assets/imgs/pexels-pixabay-280222.jpg","id":3},{"title":"adams castle","price":300000000,"imgUrl":"http://127.0.0.1:5500/project/assets/imgs/villa-g891a73c21_1920.jpg","id":4},{"title":"loft","price":1250000,"imgUrl":"http://127.0.0.1:5500/project/assets/imgs/house-gf14c5e267_1280.jpg","id":5},{"title":"lake house","price":1000000,"imgUrl":"http://127.0.0.1:5500/project/assets/imgs/lake-g901a60927_1280.jpg","id":6},{"title":"mountain house","price":1500000,"imgUrl":"http://127.0.0.1:5500/project/assets/imgs/mountains-g3c8089815_1920.jpg","id":7}]
  }
  donotTouchRealEstateArr = _.cloneDeep(realEstateArr);
};
initRealestateArrays();
