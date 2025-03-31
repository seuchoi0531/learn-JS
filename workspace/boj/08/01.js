/*
제목: 진법 변환
설명: 진법에 대해 배우는 문제
제출: https://www.acmicpc.net/submit/2745

문제
B진법 수 N이 주어진다. 이 수를 10진법으로 바꿔 출력하는 프로그램을 작성하시오.
10진법을 넘어가는 진법은 숫자로 표시할 수 없는 자리가 있다. 
이런 경우에는 다음과 같이 알파벳 대문자를 사용한다.
A: 10, B: 11, ..., F: 15, ..., Y: 34, Z: 35

입력
첫째 줄에 N과 B가 주어진다. (2 ≤ B ≤ 36)
B진법 수 N을 10진법으로 바꾸면, 항상 10억보다 작거나 같다.

출력
첫째 줄에 B진법 수 N을 10진법으로 출력한다.

[AI가 추가한 테스트 케이스 10개]
예제 입력 1
ZZZZZ 36

예제 출력 1
60466175

예제 입력 2
1010 2

예제 출력 2
10

예제 입력 3
FF 16

예제 출력 3
255

예제 입력 4
1234 8

예제 출력 4
668

예제 입력 5
ABCDEF 16

예제 출력 5
11259375

예제 입력 6
Z 36

예제 출력 6
35

예제 입력 7
101 3

예제 출력 7
10

예제 입력 8
XYZ 36

예제 출력 8
44027

예제 입력 9
9 10

예제 출력 9
9

예제 입력 10
A 11

예제 출력 10
10

예제 입력 11
ZZZZZZZZ 36

예제 출력 11
2821109907455
*/

let fs = require("fs");
let input = fs.readFileSync(0, "utf-8").trim().split(" ");
let str = input[0];
let base = parseInt(input[1]);
function ntod(str, base) {
  let sum = 0n;
  for (i of str) {
    sum *= BigInt(base);
    if (i.charCodeAt() >= "A".charCodeAt() && i.charCodeAt() <= "Z".charCodeAt()) sum += BigInt(i.charCodeAt() - "A".charCodeAt() + 10);
    else sum += BigInt(parseInt(i));
  }
  return sum.toString();
}
console.log(ntod(str, base));
