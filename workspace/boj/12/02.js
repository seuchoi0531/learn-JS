/*
제목: 분해합
설명: 모든 경우를 시도하여 N의 생성자를 구하는 문제
제출: https://www.acmicpc.net/submit/2231

문제
어떤 자연수 N이 있을 때, 그 자연수 N의 분해합은 N과 N을 이루는 각 자리수의 합을 의미한다. 
어떤 자연수 M의 분해합이 N인 경우, M을 N의 생성자라 한다. 
예를 들어, 245의 분해합은 256(=245+2+4+5)이 된다. 
따라서 245는 256의 생성자가 된다. 
물론, 어떤 자연수의 경우에는 생성자가 없을 수도 있다. 
반대로, 생성자가 여러 개인 자연수도 있을 수 있다.

자연수 N이 주어졌을 때, N의 가장 작은 생성자를 구해내는 프로그램을 작성하시오.

입력
첫째 줄에 자연수 N(1 ≤ N ≤ 1,000,000)이 주어진다.

출력
첫째 줄에 답을 출력한다. 생성자가 없는 경우에는 0을 출력한다.

[AI가 추가한 테스트 케이스 10개]
예제 입력 1
216
예제 출력 1
198

예제 입력 2
1
예제 출력 2
0

예제 입력 3
2
예제 출력 3
1

예제 입력 4
4
예제 출력 4
2

예제 입력 5
256
예제 출력 5
245

예제 입력 6
1000000
예제 출력 6
0

예제 입력 7
999999
예제 출력 7
999954

예제 입력 8
100
예제 출력 8
86

예제 입력 9
187
예제 출력 9
0

예제 입력 10
500
예제 출력 10
484

예제 입력 11
101
예제 출력 11
91
*/

let fs = require("fs");
let input = fs.readFileSync(0, "utf-8").trim();
let n = parseInt(input);
let i = 0;
let flag = false;
for (i = 0; i < n; i++) {
  let sum = i;
  for (k of i.toString()) sum += parseInt(k);
  if (sum == n) {
    flag = true;
    break;
  }
}
if (flag) console.log(i);
else console.log(0);
