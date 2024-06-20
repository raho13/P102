// function getName(callback) {
//   let data = "";
//   setTimeout(() => {
//     // datani getirir
//     data = "Rahib";
//     callback(data);
//   }, 1000);
// }

// function getSurname(name, callback) {
//   let data;
//   setTimeout(() => {
//     // ad-a gore soyadi tapsin
//     data = "Rzayev";
//     callback(data);
//   }, 2000);
// }

// function getFullName(name, surname, callback) {
//   setTimeout(() => {
//     // ad ile soyadi birlesdirir

//     callback(name, surname);
//   }, 500);
// }
// // Callback hell
// getName((name) => {
//   getSurname(name, (surname) => {
//     getFullName(name, surname, (name, surname) => {
//       console.log("Salam " + name + " " + surname);
//     });
//   });
// });

//-------------------- Promises----------------------

let myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let data = false;
    // data getiriri
    data = [
      {
        name: "Rahib",
      },
      {
        name: "Tohid",
      },
      {
        name: "Elesger",
      },
    ];

    if (data) {
      resolve(data);
    } else {
      reject("error bas verdi");
    }
  }, 2000);
});
let myPromise2 = new Promise((resolve, reject) => {
  reject("2 resolve oldu");
});

// myPromise
//   .then((response) => {
//     console.log(myPromise);
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(myPromise);
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("bu hemise isleyir");
//   });

// let result = Promise.race([myPromise, myPromise2]);
// result
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

let myPro = fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));
console.log(myPro);
