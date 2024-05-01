async function sleep() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(45);
    }, 1000);
  });
}

function sum(a, b, c) {
  return a + b + c;
}

// IIFE --> Immediate Invoked Function Expression
(async function main() {
  //   let a = await sleep();
  //   console.log(a);

  // Destructuring in array

  //   let [x, y] = [1, 7];
  //   console.log(x, y);

  //   let [x, y, ...rest] = [1, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
  //   console.log(x, y, rest);

  //   Destructuring in object
  let obj = {
    a: 1,
    b: 2,
    c: 3,
  };

  let { a, b, c } = obj;
  console.log(a, b, c);

  let arr = [1, 2, 3];
  //   spread operator
  console.log(sum(...arr));
})();
