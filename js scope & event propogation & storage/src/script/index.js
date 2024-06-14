// while (true) {

// }

function myFn() {
  var myVal = 3; // let
  var myVal = ["salam"];
  var myVal = true;

  if (true) {
    var myVal = 3; // let
  }

  if (true) {
    var myVal = ["salam"];
  }

  if (true) {
    var myVal = true;
  }

  //   return myVal.map(());

  console.log(myVal);
}

// myFn();

// const div = document.getElementsByTagName("div")[0];
// const p = document.getElementsByTagName("p")[0];
// const span = document.getElementsByTagName("span")[0];

// div.addEventListener("click", (e) => {
//   e.stopPropagation();
//   console.log("div clicked");
// });

// p.addEventListener("click", (e) => {
//   e.stopPropagation();
//   console.log("p clicked");
// });

// span.addEventListener("click", (e) => {
//   e.stopPropagation();
//   console.log("span clicked");
// });

// let btn = document.getElementsByTagName("button")[0];
// let p = document.getElementsByTagName("p")[0];
// btn.addEventListener("click", () => {
//   localStorage.setItem("token", "14356789024987636487923");
//   localStorage.setItem("testData", "test");
// });
// p.addEventListener("click", () => {
//   let myToken = localStorage.getItem("testData");
//   console.log(myToken);
// });




// let btn = document.getElementsByTagName("button")[0];
// let p = document.getElementsByTagName("p")[0];
// btn.addEventListener("click", () => {
//   sessionStorage.setItem("token", "14356789024987636487923");
//   sessionStorage.setItem("testData", "test");
// });
// p.addEventListener("click", () => {
//   let myToken = sessionStorage.getItem("token");
//   console.log(myToken);
// });

let btn = document.getElementsByTagName("button")[0];
let p = document.getElementsByTagName("p")[0];
btn.addEventListener("click", () => {

  document.cookie = `token=test`;
});
p.addEventListener("click", () => {
  let myToken = document.cookie;
  console.log(myToken);
});
