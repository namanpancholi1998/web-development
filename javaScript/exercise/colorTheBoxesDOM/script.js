let boxes = document.getElementsByClassName("box");

// console.log(boxes);

function getRandomColor() {
  let r = Math.ceil(0 + Math.random() * 255);
  let g = Math.ceil(0 + Math.random() * 255);
  let b = Math.ceil(0 + Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}

Array.from(boxes).forEach((box) => {
  box.style.backgroundColor = getRandomColor();
  box.style.color = getRandomColor();
});

// const boxColors = [
//   {
//     color: "red",
//     backgroundColor: "black",
//   },
//   {
//     color: "black",
//     backgroundColor: "red",
//   },
//   {
//     color: "white",
//     backgroundColor: "blue",
//   },
//   {
//     color: "white",
//     backgroundColor: "black",
//   },
//   {
//     color: "orange",
//     backgroundColor: "green",
//   },
// ];

// const boxes = document.querySelectorAll(".box");
// // console.log(boxes);
// boxes.forEach((box, index) => {
//   box.style.color = boxColors[index].color;
//   box.style.backgroundColor = boxColors[index].backgroundColor;
// });

// document.getElementById("box1").style.color = "red";
// document.getElementById("box1").style.backgroundColor = "black";

// document.getElementById("box2").style.color = "white";
// document.getElementById("box2").style.backgroundColor = "orange";

// document.getElementById("box3").style.color = "orange";
// document.getElementById("box3").style.backgroundColor = "green";

// document.getElementById("box4").style.color = "blue";
// document.getElementById("box4").style.backgroundColor = "lightgrey";

// document.getElementById("box5").style.color = "brown";
// document.getElementById("box5").style.backgroundColor = "yellow";
