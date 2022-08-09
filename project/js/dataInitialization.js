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
  new RealEstate(
    "adams castle",
    300000000,
    "http://127.0.0.1:5500/project/assets/imgs/villa-g891a73c21_1920.jpg",
    4
  ),
  new RealEstate(
    "loft",
    1250000,
    "http://127.0.0.1:5500/project/assets/imgs/house-gf14c5e267_1280.jpg",
    5
  ),
  new RealEstate(
    "lake house",
    1000000,
    "http://127.0.0.1:5500/project/assets/imgs/lake-g901a60927_1280.jpg",
    6
  ),
  new RealEstate(
    "mountain house",
    1500000,
    "http://127.0.0.1:5500/project/assets/imgs/mountains-g3c8089815_1920.jpg",
    7
  ),
];

const donotTouchRealEstateArr = _.cloneDeep(realEstateArr);
