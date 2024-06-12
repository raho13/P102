function getName(params) {
  return `params:${params}  ${this.name + "-" + this.age}`;
}

// console.log(getName())
let myContext = {
  name: "Rahib",
  age: 24,
};
// let calledFn = getName.call(myContext);
// console.log(calledFn);
let appliedFn = getName.apply(myContext, ["test"]);
// console.log(appliedFn);
let bindedFn = getName.bind(myContext);
// console.log(bindedFn('dfghj'));
// console.log(bindedFn("test params"))
// ---------------------------Closures-------------------

// function outerFn() {
//   let a = "";
//   return function innerFn(newVal) {
//     a += newVal;
//     return a
//   };
// }

// let myFn=outerFn();
// console.log(myFn())

// console.log(outerFn()("test"));

// let val = "test value";
// decFn(); // decFn
// exFn(); // reference error

let num = 0;
let decFn = () => {
  num++;
  console.log(num);

  if (num < 5) {
    decFn();
  }

};


decFn();

