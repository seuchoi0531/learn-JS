/*
배열의 모든 요소 읽기 1 - for 루프, for...of, for...in
*/

const arr = [1, 2, 3, 4];

//배열의 모든 요소 출력(for)
console.log("for");
for (let i = 0; i < arr.length; i++) {
  // i = 0, i = 1, i = 2 경우에 for 문이 실행됨
  const elem = arr[i]; // arr[0], arr[1], arr[2]
  console.log(i, elem); // 0 10, 1 20, 2 30
}

// 배열 모든 요소의 합계, 홀수값의 합계, 짝수값의 합계를 출력

console.log("배열 모든 요소의 합계");
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  const elem = arr[i];
  sum += elem;
}
console.log(sum);

console.log("홀수값의 합계");
let oddSum = 0;
for (let i = 1; i < arr.length; i += 2) {
  const elem = arr[i];
  oddSum += elem;
}
console.log(oddSum);
console.log("짝수값의 합계");
let evenSum = 0;
for (let i = 0; i < arr.length; i += 2) {
  const elem = arr[i];
  evenSum += elem;
}
console.log(evenSum);
