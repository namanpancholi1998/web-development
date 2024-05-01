class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  get name() {
    return this._name;
  }

  set name(name) {
    if (name.length < 4) {
      alert("Name is too short.");
      return;
    }
    this._name = name;
  }

  get age() {
    return this._age;
  }

  set age(age) {
    if (age >= 18 && age <= 80) {
      alert("age not valid.");
      return;
    }
    this._age = age;
  }
}

let user1 = new User("Naman", 22);
console.log(user1.name);
console.log(user1.age);
