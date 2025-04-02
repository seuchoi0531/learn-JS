/*
while문
*/

// 1부터 10까지 홀수의 합계 출력
const num = 10;
let sum = 0;
let i = 1;
while (i <= parseInt((num + 1) / 2)) sum += 2 * i++ - 1;
console.log(`1부터 10까지 홀수의 합계 : ${sum}`);
// 1부터 10까지 짝수의 합계 출력
sum = 0;
i = 1;
while (i <= parseInt(num / 2)) sum += 2 * i++;
console.log(`1부터 10까지 짝수의 합계 : ${sum}`);

let evenSum = 0;
let oddSum = 0;
i = 1;
while (i <= num) {
  if (i % 2 == 0) evenSum += i++;
  else oddSum += i++;
}
// 1부터 10까지 홀수의 합계 출력
console.log(`1부터 10까지 홀수의 합계 : ${oddSum}`);
// 1부터 10까지 짝수의 합계 출력
console.log(`1부터 10까지 짝수의 합계 : ${evenSum}`);

if (num % 2 == 0) {
  console.log(`1부터 10까지 홀수의 합계 : ${(num * num) / 4}`);
  console.log(`1부터 10까지 짝수의 합계 : ${(num * (num + 2)) / 4}`);
} else {
  console.log(`1부터 10까지 홀수의 합계 : ${(num + 1) ** 2 / 4}`);
  console.log(`1부터 10까지 짝수의 합계 : ${(num * num - 1) / 4}`);
}
