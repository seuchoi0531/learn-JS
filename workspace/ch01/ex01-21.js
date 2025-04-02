/*
반복문 - for문
*/

// let i = 0;
// // 1부터 10까지의 모든 수의 합계를 출력
// let sum = 0;

// i = 1; // 초기화
// while (i < 10) {
//   // 조건식
//   sum += i; // 실행할 코드
//   i++; // 증감식
// }
// console.log(i);
// console.log(sum);

let sum = 0;
for (let i = 1; i <= 10; i++) {
  // 초기화, 조건식, 증감식
  sum += i; // 실행할 코드
}
console.log(sum);

sum = 0;
let count = 1;
for (count = 1; sum <= 10000; count++) {
  sum += count;
}
console.log(count - 1 + "까지 더하면 10000을 넘습니다.");

// 1부터 10까지 출력
console.log("1부터 10까지 출력");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
// 1부터 10까지 홀수의 합계 출력. 25
console.log("1부터 10까지 홀수의 합계 출력");
sum = 0;
for (let i = 1; i <= 10; i += 2) {
  sum += i;
}
console.log(sum);
// 1부터 10까지 짝수의 합계 출력. 30
console.log("1부터 10까지 짝수의 합계 출력");
sum = 0;
for (let i = 2; i <= 10; i += 2) {
  sum += i;
}
console.log(sum);
