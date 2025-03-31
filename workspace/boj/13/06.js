/*
제목: 
설명: 
제출: 


*/

let fs = require("fs");
let input = fs.readFileSync(0, "utf-8").trim();
let arr = new Array(10);
arr.fill(0, 0, 10);
for (i of input) arr[i.charCodeAt() - "0".charCodeAt()]++;
let rst = "";
for (let i = 9; i >= 0; i--) {
  for (let cnt = 0; cnt < arr[i]; cnt++) rst += i;
}
console.log(rst);
