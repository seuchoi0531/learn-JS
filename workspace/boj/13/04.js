/*
제목: 
설명: 
제출: 


*/

let fs = require("fs");
let input = fs.readFileSync(0, "utf-8").trim().split("\n");
let arr = [];
for (let i = 1; i <= parseInt(input[0]); i++) arr.push(parseInt(input[i]));
arr = arr.sort((a, b) => a - b);
let rst = "";
for (i of arr) rst += i + "\n";
console.log(rst);
