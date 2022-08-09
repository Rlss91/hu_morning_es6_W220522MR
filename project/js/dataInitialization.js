/*
    this file will initialize the data
    we use this file to simulate data from server
*/

let realEstateArr = [
  new RealEstate(
    "villa",
    200000,
    "http://127.0.0.1:5500/project/assets/imgs/house-gf551a4fec_1920.jpg",
    1
  ),
  new RealEstate(
    "mantion",
    2000000,
    "http://127.0.0.1:5500/project/assets/imgs/pexels-chris-goodwin-32870.jpg",
    2
  ),
  new RealEstate(
    "snowwhite",
    150001,
    "http://127.0.0.1:5500/project/assets/imgs/pexels-pixabay-280222.jpg",
    3
  ),
];

const donotTouchRealEstateArr = _.cloneDeep(realEstateArr);
