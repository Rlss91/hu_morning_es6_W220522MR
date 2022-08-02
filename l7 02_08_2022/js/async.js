let p1 = new Promise((res, rej) => {
  setTimeout(() => {
    res(true);
  }, 1000);
});
let p2 = new Promise((res, rej) => {
  setTimeout(() => {
    res(true);
  }, 1000);
});
let p3 = new Promise((res, rej) => {
  setTimeout(() => {
    res(true);
  }, 1000);
});
let p4 = new Promise((res, rej) => {
  setTimeout(() => {
    res(true);
  }, 1000);
});

const runAllPromisses = async () => {
  /*  
        wait for p1 to complete
        if p1 succeses then put the data to data1
    */
  let data1 = await p1;
  let data2 = await p2;
  let data3 = await p3;
  let data4 = await p4;
  console.log(data1);
  console.log(data2);
  console.log(data3);
  console.log(data4);
};
// runAllPromisses();

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

const createPromiseFunction = () => {
  /*
          this function create new promise each time 
          this function called.
          and return the new promise
      */
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let randomNumber = getRandomIntInclusive(0, 1000);
      if (randomNumber % 2 === 0) {
        resolve(randomNumber);
      } else {
        reject("the number was odd");
      }
    }, 20);
  });
};

const runAllPromissesReject = async () => {
  /*  
          wait for pr1 to complete
          if pr1 succeses then put the data to data1
      */
  try {
    let data1 = await createPromiseFunction();
    let data2 = await createPromiseFunction();
    let data3 = await createPromiseFunction();
    let data4 = await createPromiseFunction();
    console.log(data1);
    console.log(data2);
    console.log(data3);
    console.log(data4);
  } catch (error) {
    console.log(error);
  }
  console.log("after promise code");
};
runAllPromissesReject();
