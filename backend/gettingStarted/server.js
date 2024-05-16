// Read up
// https://nodejs.org/en/learn/getting-started/introduction-to-nodejs

// console.log("Hello from server.js");

// it is use for like this blog website
var slugify = require("slugify");

let a = slugify("some string"); // some-string

// if you prefer something other than '-' as separator
const b = slugify("some string", "_"); // some_string

console.log(a, b);
