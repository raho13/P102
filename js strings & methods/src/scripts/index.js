let myUrl = "https://google.com/root?sort=1&search=coding&any=ihfe&filter=anytext";

// let a = {
//   sort: 1,
//   search: "conding",
//   any:"ihfe"
// };

// let parseUrl = (myUrl) => {
//   let parsedUrl = myUrl.split("?")[1].split("&");
//   myUrl.split("?") 
//    ["https://google.com/root","sort=1&search=coding&any=ihfe"]
//   let myObj = {};
//   for (let i = 0; i < parsedUrl.length; i++) {
//     const element = parsedUrl[i].split("=");
//     myObj[element[0]] = element[1];
//   }
//   return myObj;
// };

// console.log(parseUrl(myUrl));

const find = (url) => {
  let obj = {}

  let index = url.indexOf('?')
  console.log(index);
  let afterIndex = url.slice(index + 1)
  console.log(afterIndex);
  let arr = afterIndex.split('&')
  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    let cut = arr[i].split('=')
    console.log(cut);
    obj[cut[0]]=cut[1]
  }

  console.log(obj);
}

find('https://google.com/root?sort=1&search=coding&any=ihfe&filter=anytext')