let str = "2022-07-24";

let arr = str.split("-");
console.log(arr);

const isEmail = (email) => {
  //something@something.some...
  let arrSp1 = email.split("@");
  if (arrSp1.length === 2) {
    let arrSp2 = arrSp1[1].split(".");
    if (arrSp2.length > 1) {
      return true;
    }
  }
  return false;
};
console.log(isEmail("kenny@gmail.com"));
