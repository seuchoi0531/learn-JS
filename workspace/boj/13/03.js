/*
제목: 
설명: 
제출: 


*/

let fs = require("fs");
let input = fs.readFileSync(0, "utf-8").trim().split("\n");
let arr = [];
for (let i = 0; i < parseInt(input[0].split(" ")[0]); i++) arr.push(parseInt(input[1].split(" ")[i]));
arr = arr.sort((a, b) => b - a);
console.log(arr[parseInt(input[0].split(" ")[1]) - 1]);
