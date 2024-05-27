// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// // console.log(fruits.join(''))
// // console.log(fruits);
// // fruits.pop(); // sonuncu elementi silir
// // console.log(fruits)
// // fruits.push("Kiwi")

// console.log(fruits);

// fruits.shift(); // ilk elementi silir
// console.log(fruits);
// fruits.unshift("Avokado");
// console.log(fruits);

// const myGirls = ["Cecilie", "Lone"];

// const myBoys = ["Emil", "Tobias", "Linus"];

// // console.log(myBoys);

// // console.log(myGirls);

// // let mergedArray = myBoys.concat(myGirls);
// // let mergedArray = myGirls.concat(myBoys);
// // console.log(mergedArray);
// let str = "dhivwei";
// const mergedArray = ["eghjhvbjn", ...myBoys, ...myGirls, ...myBoys]; // Spread operator

// console.log(mergedArray);

// const arr1 = ["Cecilie", "Lone"];
// const arr2 = ["Emil", "Tobias", "Linus"];
// const arr3 = ["Robin", "Morgan"];
// const myChildren = arr1.concat(arr2, arr3, mergedArray);

// console.log(myChildren);

// const myArr = [
//   [1, [4, 4, 4]],
//   [3, 4],
//   [5, 6],
// ];

// const newArr = myArr.flat(2);

// console.log(newArr);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits);
// // fruits.splice(1, 1, { name: "salam" });

// console.log(fruits);

// const months = ["Jan", "Feb", "Mar", "Apr"];
// console.log(months)
// const spliced = months.toSpliced(2, 1);
// console.log(months)
// console.log(spliced)

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// console.log(fruits)
// const citrus = fruits.slice(0,2);

// console.log(citrus)

// const fruits = ["Apple", "Orange", "salam", "Mango"];
// console.log(fruits);
// let index = fruits.indexOf("");
// fruits.splice(index, 1);

// console.log(fruits);

const people = [
  { name: "Rahib", surname: "Rzayev" },
  { name: "Tohid", surname: "Abdullazade" },
  { name: "Elesger", surname: "Qadasov" },
  { name: "Mirze", surname: "Besirzade" },
];

// let val = prompt();
// //RA rA=ra

// let findedArr = people.find((obj, i, arr) => {
//   return obj.name.toLowerCase().includes(val.toLowerCase());
// });

// let mappedArr = people.map((obj) => {
//   if (obj.name.toLowerCase().includes(val.toLowerCase())) {
//     return obj;
//   }
// });
// let mappedArr = people.forEach((obj, i, arr) => {
//   if (obj.name.toLowerCase().includes(val.toLowerCase())) {
//    console.log(obj)
//   }
// });
// console.log(mappedArr);
// let myVal = people.some((obj, i, arr) => {
//   if (obj.name.toLowerCase().includes(val.toLowerCase())) {
//    return obj
//   }
// });

//console.log([3, 5, 7, 8].at(2));
// let nums = [1, 2, 3, 4, 5];
// let sum = 0;

// for (let i = 0; i <= nums.length-1; i++) {
//   sum+= nums[i]; // sum = sum + num[i]

// };
// console.log(sum)
// let sumArr = nums.reduce((acc, curr) => {
//   return { ...acc, [curr + 1]: Math.random() };
// }, {});

// console.log(sumArr);

// let container = document.getElementById("container");

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((json) => {
//     json.forEach((elem) => {
//       container.innerHTML += `<h1>${elem.title}</h1>`;
//     });
//   });

// let input = document.querySelector("input");
// let btn = document.querySelector("button");
// let content = document.getElementById("content");
// btn.addEventListener("click", () => {
//   content.innerText = input.value;
// });



