/*
제목: 
설명: 
제출: 


*/

let fs = require("fs");
let input = fs.readFileSync(0, "utf-8").trim().split("\n");
let n = parseInt(input[0]);
let set = new Set();
for (let i = 1; i <= n; i++) set.add(input[i].trim());
let arr = [];
set.forEach((e) => {
  arr.push(e);
});
arr.sort((a, b) => {
  if (a.length > b.length) return 1;
  if (a.length < b.length) return -1;
  return a.localeCompare(b);
});
let rst = "";
for (i of arr) rst += i + "\n";
console.log(rst);
