/**
    Write a program to calculate factorial of a number using reduce and using for loop

    6?
    6 = 6*5*4*3*2*1

*/

// Using for loop
// let num = prompt("Enter a number");
// let ans = 1;

// for (let i = num; i > 0; i--) {
//   ans *= i;
// }

// console.log(ans);

// let arr = [];
// for (let i = 1; i <= num; i++) {
//   arr.push(i);
// }
// // console.log(arr);

// let ans = arr.reduce((curr, prev) => {
//   curr *= prev;
//   return curr;
// });
// console.log(ans);

// Using reduce
let a = 7;

function factorial(number) {
  let arr = Array.from(Array(number + 1).keys());
  let c = arr.slice(1).reduce((a, b) => a * b);
  return c;
}

function facFor(number) {
  let fac = 1;
  for (let index = 1; index <= number; index++) {
    fac = fac * index;
  }
  return fac;
}
console.log(factorial(a));
console.log(facFor(a));
