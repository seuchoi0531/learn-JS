/*
제목: 
설명: 
제출: 


*/

let fs = require("fs");
let input = fs.readFileSync(0, "utf-8").trim().split("\n");
let n = parseInt(input[0]);
let inputarr = [];
for (i of input[1].trim().split(" ")) inputarr.push(parseInt(i));
// let arr = inputarr.filter((e, i) => {
//   return inputarr.indexOf(e) == i;
// });
// arr.sort((a, b) => a - b);
let set = new Set();
for (i of input[1].trim().split(" ")) set.add(parseInt(i));
let arr = [...set].sort((a, b) => a - b);
let obj = {};
arr.forEach((e, i) => {
  obj[e] = i;
});
let rst = "";
for (i of inputarr) rst += obj[i] + " ";
console.log(rst);
