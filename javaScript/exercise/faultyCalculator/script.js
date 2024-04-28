/*
    Create a faulty calculator using JavaScript

    This faulty calculator does following: 
    1. It takes two numbers as input from user 
    2. It preforms wrong operations as follows:

    + ----> -
    * ----> +
    - ----> /
    / ----> **
    It performs wrong operations 10% of the times
    1-100 ke beech mai random number genrator number kro or dekho ki less than 0.1 se chotta hai ki nhi 
*/
let random = Math.random();
console.log(random);
let a = prompt("Enter first number");
let c = prompt("Enter operation");
let b = prompt("Enter second number");

let obj = {
  "+": "-",
  "*": "+",
  "-": "/",
  "/": "**",
};

if (random > 0.1) {
  // Perform correct calculation
  console.log(`The result is ${a} ${c} ${b}`);
  alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
} else {
  // Perform wrong calculation
  c = obj[c];
  alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}
