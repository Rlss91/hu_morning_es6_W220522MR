/*
    we create promise that will send request to the server
    if the request is good then the promise will return the dollar
    else it will return error msg
*/
const myFirstPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3.6); //if the result was a success it will return 3.6
  }, 2000);
});
/*
    this promise will put the value from the resolve in to the first argument
    value = data
    resolve --call to--> then
*/
myFirstPromise.then((data) => {
  // this anonimus callback function will be executed
  // in case of success
  console.log("the dollar today is", data);
});

/*
    this promise will always fail
*/
const mySecondPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("server offline");
  }, 2000);
});
/*
    the error that we will put in the promise in the reject
    will be in catch as the first argument
    in our case the error msg will be in error argument
    value = error
    reject --call to--> catch
*/
mySecondPromise.catch((error) => {
  console.log("the promise failed with error msg", error);
});

/*
    choose number randomly between 0 to 1000
    create promise that will success if this number is even and return the number
    else the promise will fail with error msg "the number was odd"
*/

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

const evenOddPromise = new Promise((resolve, reject) => {
  let randomNumber = getRandomIntInclusive(0, 1000);
  if (randomNumber % 2 === 0) {
    resolve(randomNumber);
  } else {
    reject("the number was odd");
  }
});

evenOddPromise
  .then((data) => {
    console.log("the number is", data);
  })
  .catch((error) => {
    console.log(error);
  });
// evenOddPromise.then((data) => {
//   console.log("the number is", data);
// });
// evenOddPromise.catch((error) => {
//   console.log(error);
// });
evenOddPromise
  .then((data) => {
    console.log("the number is", data);
  })
  .catch((error) => {
    console.log(error);
  });

const createPromiseFunction = () => {
  /*
        this function create new promise each time 
        this function called.
        and return the new promise
    */
  return new Promise((resolve, reject) => {
    let randomNumber = getRandomIntInclusive(0, 1000);
    if (randomNumber % 2 === 0) {
      resolve(randomNumber);
    } else {
      reject("the number was odd");
    }
  });
};

const evenOddPromise1 = createPromiseFunction();
evenOddPromise1
  .then((data) => {
    console.log("the number is", data);
  })
  .catch((error) => {
    console.log(error);
  });

function f1() {
  let a = 5;
  return a;
}
let a = f1();
console.log("a", a);
