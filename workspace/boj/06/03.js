/*
제목: 별 찍기 - 7
설명: 🌟
제출: https://www.acmicpc.net/submit/2444

문제
예제를 보고 규칙을 유추한 뒤에 별을 찍어 보세요.

입력
첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다.

출력
첫째 줄부터 2×N-1번째 줄까지 차례대로 별을 출력한다.

예제 입력 1
3
예제 출력 1
  *
 ***
*****
 ***
  *

예제 입력 2
4
예제 출력 2
    *
   ***
  *****
 *******
  *****
   ***
    *

예제 입력 3
5
예제 출력 3
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
*/

let fs = require("fs");
let input = fs.readFileSync(0, "utf-8").trim();
let n = parseInt(input);
let rst = "";
for (let i = 0; i < n; i++) {
  rst = "";
  for (let j = 1; j <= n + i; j++) {
    if (j >= n - i && j <= n + i) rst += "*";
    else rst += " ";
  }
  console.log(rst);
}
for (let i = n - 2; i >= 0; i--) {
  rst = "";
  for (let j = 1; j <= n + i; j++) {
    if (j >= n - i && j <= n + i) rst += "*";
    else rst += " ";
  }
  console.log(rst);
}
