// Classes

class Animals {
  constructor(name) {
    console.log("Object is created");
    this.name = name;
  }

  eats() {
    console.log("Eats");
  }
  jumps() {
    console.log("Jumps");
  }
}

let a = new Animals("Bunny");
console.log(a);
console.log(a.name);
a.eats();
a.jumps();

// Inheritance
class Lion extends Animals {
  constructor(name) {
    super(name);
    console.log("Lion is created");
  }

  // Method Overriding
  eats() {
    console.log("Lion eats");
  }
}

let l = new Lion("Lion");
console.log(l);
console.log(l.name);
l.eats();

// Objects

// let obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };
// console.log(obj);

// let animal = {
//   eats: true,
// };

// let rabbit = {
//   jumps: true,
// };

// rabbit.__proto__ = animal; // sets rabbit's __proto__ to animal
// console.log(rabbit);
// // console.log(rabbit.eats);
