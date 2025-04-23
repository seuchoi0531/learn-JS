/*
반복문 - break, continue
*/

// n ~ m 까지의 정수중에서 가장 작은 짝수를 찾아서 출력하세요.
// n < m

const n = 1;
const m = 10;
for (let i = n; i <= m; i++) {
  if (i % 2 == 0) {
    console.log(i);
    break;
  }
}

console.log(Math.ceil(n) % 2 ? Math.ceil(n) + 1 : Math.ceil(n));

let allbreak = false;
let starti = 4;
let startj = 8;
let startk = 5;
let endi = 20;
let endj = 31;
let endk = 9;
for (let i = starti; i < endi; i++) {
  for (let j = startj; j < endj; j++) {
    for (let k = startk; k < endk; k++) {
      if ((i * j * k) % 2 !== 0) {
        allbreak = true;
        console.log(`i: ${i}, j: ${j}, k:${k} => ${i * j * k}`);
        break;
      }
    }
    if (allbreak === true) {
      break;
    }
  }
  if (allbreak === true) {
    break;
  }
}

for (let i = n; i <= m; i++) {
  if (i % 2 === 1) {
    console.log("홀수", i);
    continue;
  }
  console.log("짝수", i);
}
