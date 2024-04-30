// console.log("Callbacks and Promises");
// console.log("Callbacks and Promises again");

// setTimeout(() => {
//   console.log("I am inside setTimeout");
// }, 0);

// setTimeout(() => {
//   console.log("I am inside setTimeout 2 ");
// }, 0);

// console.log("I am outside setTimeout");

// Callbacks
const callback = (arg) => {
  console.log(arg);
};

const loadScript = (src, callback) => {
  const sc = document.createElement("script");
  sc.src = src;
  sc.onload = callback("script loaded");

  document.head.append(sc);
};

loadScript(
  "https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",
  callback
);
//  this url from prism cdn
