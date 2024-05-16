import fs from "fs/promises";

let a = await fs.readFile("hello.txt");

let b = await fs.writeFile("hello2.txt", "Hello World Again from main promise");

console.log(a.toString());
