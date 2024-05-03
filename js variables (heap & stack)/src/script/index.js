// Primitive type
// let a = 3;

// let b = a;

// console.log("a-nin deyeri", a);

// console.log("b-nin deyeri", b);

// a = 5;

// console.log("a-nin deyeri", a);

// console.log("b-nin deyeri", b);

// Reference type

let person = { name: "Rahib" };

let personTwo = person; //x0007;

console.log("person:", person.name);

console.log("persontwo:", personTwo.name);

person.name = "Test";
personTwo.name = "re";

console.log("person:", person.name);

console.log("persontwo:", personTwo.name);

let sinif = [
  {
    name: "Tohid",
    age: 22,
    skills: ["html", "css", { js: "ES2", react: "18" }],
  },

  { name: "Elesger", age: 24 },
];

console.log(sinif[0].skills[2].react);
