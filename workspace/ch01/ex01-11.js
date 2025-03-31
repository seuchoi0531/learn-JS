/*
비교 연산자 >, >=, <, <=, ==, !=, ===, !==
*/

var a = 5;
var b = 10;
var c = "5";
var d = 5;

// > (크다)
console.log(a > b); // 5 > 10 = false

// < (작다)
console.log(a < b); // 5 < 10 = true

// >= (크거나 같다)
console.log(a >= d); // 5 >= 5 = true

// <= (작거나 같다)
console.log(a <= d); // 5 <= 5 = true

// 문자열 비교
console.log(a == c); // 동등, true
console.log(a === c); // 일치, false

console.log("ch2" > "ch01");

var arr = ["ch01", "ch12", "ch2", "ch05"];
arr.sort();
console.log(arr);
