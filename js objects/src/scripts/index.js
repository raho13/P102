// // Objects

let Person = {
  name: "Rahib",
  surname: "Rzayev",
  hobbies: [1, 4, 67, 0],
  colors: {
    value: "red",
  },
  get fullName() {
    // Getter
    return `${this.name}-${this.surname}`;
  },
  set setName(name) {
    // Setter
    this.name = name;
  },
  getAllData: function () {
    return this;
  },
};

// Person.age = "lkdqwkb";

// Person["age"] = "ljgiduwb";

Object.defineProperty(Person, "age", {
  value: 24,
  writable: false,
  configurable: false,
  enumerable: false, // loops
});

// Object.defineProperties(Person, {

//   newFiled: {
//     value: "ukgjh",
//     configurable: true,
//     enumerable: false,
//   },

//   newFiled2: {
//     value: "kgjhv",
//     configurable: true,
//   },
// });
// console.log(Person)

// let myArr = Object.keys(Person);

// console.log(myArr);
// for (let i = 0; i < myArr.length; i++) {
//   let key = myArr[0];

//   console.log(Person[key]); //Person.name
// }

const car = { type: "Fiat", model: "500", color: "white" };
console.log(car);
// Object.seal(car); // objecte yeni property elave olunmasini ve ya silinmesinin qarsisin alir, amma movcude deyerleri deyisdire bilirsen.
// delete car.model
Object.freeze(car);

delete car.model;
car.test = "hgjhgj";
car.type = "Lambo";

console.log(car);
