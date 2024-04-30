console.log("Promises");

let prom1 = new Promise((resolve, reject) => {
  let num = Math.random();
  if (num < 0.5) {
    reject("No random number was not supported");
  } else {
    setTimeout(() => {
      console.log("I am inside setTimeout");
      resolve("Naman");
    }, 3000);
  }
});

let prom2 = new Promise((resolve, reject) => {
  let num = Math.random();
  if (num < 0.5) {
    reject("No random number was not supported 2");
  } else {
    setTimeout(() => {
      console.log("I am inside setTimeout 2");
      resolve("Naman 2");
    }, 1000);
  }
});

// let p3 = Promise.all([prom1, prom2]);
// p3.then((data) => {
//   console.log(data);
// }).catch((err) => {
//   console.log(err);
// });

// let p3 = Promise.allSettled([prom1, prom2]);
// p3.then((data) => {
//   console.log(data);
// }).catch((err) => {
//   console.log(err);
// });

// let p3 = Promise.race([prom1, prom2]);
// p3.then((data) => {
//   console.log(data);
// }).catch((err) => {
//   console.log(err);
// });

// resole, reject, all, allSettled, race, any

// prom1
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
