const fs = require("fs");
console.log(fs);

console.log("first log");
fs.writeFileSync("hello.txt", "Hello World"); // synchronous
console.log("second log");
fs.writeFile("hello2.txt", "Hello World Again", () => {
  // asynchronous
  console.log("hello2.txt created");

  fs.readFile("hello2.txt", (err, data) => {
    console.log(data); // this will give buffer data instead of string
    console.log(data.toString()); // this will give string
  });
});

// append
fs.appendFile("hello.txt", " Hello Again Naman", (err, data) => {
  console.log("hello.txt appended", data);
});

console.log("third log");
