/*
do-while

do{

} while(조건);
*/

// let i = 1;
// let sum = 0;

// do {
//   sum += i;
//   i++;
// } while (i <= 10);

// console.log(sum);

let i = 0;
// 1부터 10까지의 모든 수의 합계를 출력
let sum = 0;

i = 1; // 초기화
while (i < 10) {
  // 조건식
  sum += i; // 실행할 코드
  i++; // 증감식
}
console.log(i);
console.log(sum);
