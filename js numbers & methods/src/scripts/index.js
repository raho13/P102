// // let num = new Number("234506789e+67"); //NaN

// // if (isNaN(num)) {
// //   // true
// //   console.error("duzgun eded daxil edin");
// // } else {
// //   console.log("done");
// // }

// let x = "123.54";
// console.log(parseInt(x))

/*
EXTRA 20 point3. Bir funksiya yazın həmən funksiya 
3 parametr qəbul etsin 1-ci hər hansı bir string 
ex: "Jhon Doe",  2-ci bir herfden ibaret strnig 
ex: "a" və ya "T", 3-cü  isə true və ya false  dəyəri qəbul etsin.
 daha sonra funksiya gələn birinci stringin içində
  gəzərək ikinci stringin olduğu hissələri 
  tapıb onları gələn 3-cü parametrə (true və ya false) görə böyük yada kiçik hərfə çevirsin sonda isə dəyişdirilmiş stringi qaytarsın.

ex 1: modifyString("Jhon Doe", "e", true) // output: "Jhon DoE"

ex 2: modifyString("Jhon Doe", "j", false) // output: "jhon Doe"

ex 3: modifyString("Jhon Doe", "o", true) // output: "jhOn DOe"

*/

// const findLetterInText = (text, letter, is) => {
//   if (text.toLowerCase().includes(letter.toLowerCase())) {
//     let size = is ? letter.toUpperCase() : letter.toLowerCase();
//     console.log(text)
//     console.log(size)
//     console.log(letter)
//     // text = text.replaceAll(letter, size);
//     // console.log(text.replaceAll(letter, size));
//   } else {
//     console.log("bu herf yoxdur");
//   }
//   return text;
// };

// findLetterInText("alam S necesen nevar neyox", "s", false);

// const upper = (str, letter, boo) => {
//   let res = "";
//   let someVal = str.toLowerCase();
//   for (const i of someVal) {
//     i === letter && boo ? (res += i.toUpperCase()) : (res += i);
//   }
//   return res;
// };

// console.log(upper("SALAM AYEKUM", "a", false));

// let a = []; //
// let b = " ";
// if (a.length || (b && (b == a || b > 0))) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// if (undefined > 0) {
//   console.log("if");
// } else if (undefined <= 0) {
//   console.log("else if");
// } else if (undefined == 0) {
//   console.log("2 ci else if");
// } else {
//   console.log(" undefined ne oldugun ozude bilmir");
// }

// console.log(0 == []); // true
//  console.log([] == false); // false
// console.log([] == "0"); // true

// let b = [];
// if (b) {
//   console.log("if");
// } else {
//   console.log("else");
// }

for (let index = 1; index <= 100; index++) {
  let ci = [1, 2, 5, 7, 8];
  let cü = [3, 4];
  let cu = [9, 10];
  let cı = [6];
  let str = index.toString();
  let val = Number(str[str.length - 1]);
  if (ci.includes(val)) {
    console.log(`${index}-ci salam`);
  } else if (cü.includes(val)) {
    console.log(`${index}-cü salam`);
  } else if (cu.includes(val)) {
    console.log(`${index}-cu salam`);
  } else {
    console.log(`${index}-cı salam`);
  }
}
