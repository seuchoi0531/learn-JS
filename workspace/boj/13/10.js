/*
제목: 
설명: 
제출: 


*/

let fs = require("fs");
let input = fs.readFileSync(0, "utf-8").trim().split("\n");
let n = parseInt(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) {
  let tmp = [];
  tmp.push(parseInt(input[i].trim().split(" ")[0]));
  tmp.push(input[i].trim().split(" ")[1]);
  arr.push(tmp);
}
arr.sort((a, b) => {
  if (a[0] > b[0]) return 1;
  if (a[0] < b[0]) return -1;
  return 0;
});
let rst = "";
for (i of arr) rst += i[0] + " " + i[1] + "\n";
console.log(rst);
