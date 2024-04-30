// settle means resolve or reject
// resolve means promise has settled successfully
// reject means promise has not settled successfully

// json placeholder is a free json server for api development

// async function getData() {
//   //simulate getting data from a server
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(455);
//     }, 3000);
//   });
// }

async function getData() {
  let x = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  let data = await x.json();
  //   console.log(data);
  return data;
}

async function main() {
  console.log("Loading Modules");

  console.log("Do something else ");

  console.log("Load Data");

  let data = await getData();

  console.log(data);

  console.log("process data");

  console.log("task 2");
}

main();
// data.then((value) => {
//   console.log(value);

//   console.log(data);

//   console.log("process data");
// });
