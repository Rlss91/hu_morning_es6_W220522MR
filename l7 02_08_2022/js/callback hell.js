let p1 = new Promise((res, rej) => {
  res(true);
});
let p2 = new Promise((res, rej) => {
  res(true);
});
let p3 = new Promise((res, rej) => {
  res(true);
});
let p4 = new Promise((res, rej) => {
  res(true);
});

p1.then((data) => {
  console.log("p1 data", data);
  p2.then((data2) => {
    console.log("p2 data", data2);
    p3.then((data3) => {
      console.log("p3 data", data3);
      p4.then((data4) => {
        console.log("p4 data", data4);
      }).catch((err) => {
        console.log(err);
      });
    }).catch((err) => {
      console.log(err);
    });
  }).catch((err) => {
    console.log(err);
  });
}).catch((err) => {
  console.log(err);
});
