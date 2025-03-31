/*
논리 연산자 &&, ||, !
*/

// 논리합(OR): 피연산자 둘 중 하나라도 true일 경우 true가 됨.
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

var id = "hong";
var invalidId = id.length < 4 || id.length > 12;
console.log("id 입력 조건에 맞지 않음", invalidId);

// 앞의 값이 참이면 앞의 값을 반환
// 앞의 값이 거짓이면 뒤의 값을 반환
// falsy: number 0, string '', boolean false, null, undefined;
// truthy:

console.log("hello" || "world");
console.log(90 || 30);
console.log(null || "world");
console.log(undefined || "world");
console.log(0 || 30);
console.log("" || "guest");

// let userName = "체리핑";
let userName = "";
let userAge = 8;
console.log(userName || "널핑");
console.log(userAge || "나이미상");

// 논리곱(AND):
// 피연산자 둘 다 true일 경우 true가 됨.
// 둘 중 하나라도 false일 경우 false가 됨.
console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false

var id = "hong";
var invalidId = id.length < 4 || id.length > 12;
console.log("id 입력 조건에 맞지 않음", invalidId);

// 앞의 값이 참이면 앞의 값을 반환
// 앞의 값이 거짓이면 뒤의 값을 반환
// falsy: number 0, string '', boolean false, null, undefined;
// truthy:

console.log("hello" || "world");
console.log(90 || 30);
console.log(null || "world");
console.log(undefined || "world");
console.log(0 || 30);
console.log("" || "guest");

// 앞의 값이 참이면 뒤의 값을 반환
// 앞의 값이 거짓이면 앞의 값을 반환

id = null;
console.log("글자수", id && id.length);
