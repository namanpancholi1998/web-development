// console.log(document.title);
// console.log(document.body);
// console.log(window.document);

// document.body.style.backgroundColor = "black";
// document.body.style.color = "white";

// document.body.textContent = "Document Object Model";

// CHILDREN, PARENT & SIBLING NODES

// console.log(document.bsody.childNodes[3].children);

let container = document.body.childNodes[3];
// console.log(container.firstChild); // if we do this this will give us text element
// console.log(container.firstElementChild); // this will give exact child
// console.log(container.lastElementChild);

container.lastElementChild.style.backgroundColor = "red";

console.log(document.body.firstElementChild.childNodes);
console.log(document.body.firstElementChild.children); // return array

console.log(document.body.firstElementChild.firstElementChild);

console.log(
  document.body.firstElementChild.firstElementChild.nextElementSibling
);
console.log(
  document.body.firstElementChild.firstElementChild.nextElementSibling
    .nextElementSibling
);
