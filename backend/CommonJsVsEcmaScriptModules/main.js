// using require (commonjs) instead of import (es6)

// const http = require("http");
// const fs = require("fs");

(function (exports, require, module, __filename, __dirname) {
  // module code actually lives here
});

const a = require("./mymodule2.js");
console.log(a);

// this is latest version of nodejs
// import http from "http";
// import fs from "fs";

// named import -> i can not use any name
// import { a, b } from "./mymodule.js";
// console.log(a, b);
// // default import -> i can use any name
// import naman from "./mymodule.js";
// console.log(naman);

// const hostName = "127.0.0.1";
// const port = 3000;
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/html");
//   res.end("<h1>Hello World</h1>");
// });

// server.listen(port, hostName, () => {
//   console.log(`Server running at http://${hostName}:${port}/`);
// });
