/*
제목: 
설명: 
제출: 


*/

let fs = require("fs");
let input = fs.readFileSync(0, "utf-8").trim().split("\n");
let arr = [];
let sum = 0;
for (let i = 0; i < 5; i++) {
  arr.push(parseInt(input[i]));
  sum += arr[i];
}
arr = arr.sort((a, b) => a - b);
console.log(`${sum / 5}\n${arr[2]}`);
