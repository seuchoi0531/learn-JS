/*
제목: 분수찾기
설명: 분수의 순서에서 규칙을 찾는 문제
제출: https://www.acmicpc.net/submit/1193

문제
무한히 큰 배열에 다음과 같이 분수들이 적혀있다.

1/1	1/2	1/3	1/4	1/5	……
2/1	2/2	2/3	2/4	……	……
3/1	3/2	3/3	……	……	……
4/1	4/2	……	……	……	……
5/1	……	……	……	……	……
……	……	……	……	……	……

이와 같이 나열된 분수들을 1/1 → 1/2 → 2/1 → 3/1 → 2/2 → …… 과 같은 지그재그 순서로 
차례대로 1번, 2번, 3번, 4번, 5번, …… 분수라고 하자.

X가 주어졌을 때, X번째 분수를 구하는 프로그램을 작성하시오.

입력
첫째 줄에 X(1 ≤ X ≤ 10,000,000)가 주어진다.

출력
첫째 줄에 분수를 출력한다.

예제 입력 1
1
예제 출력 1
1/1

예제 입력 2
2
예제 출력 2
1/2

예제 입력 3
3
예제 출력 3
2/1

예제 입력 4
4
예제 출력 4
3/1

예제 입력 5
5
예제 출력 5
2/2

예제 입력 6
6
예제 출력 6
1/3

예제 입력 7
7
예제 출력 7
1/4

예제 입력 8
8
예제 출력 8
2/3

예제 입력 9
9
예제 출력 9
3/2

예제 입력 10
14
예제 출력 10
2/4
*/

let fs = require("fs");
let input = fs.readFileSync(0, "utf-8").trim();
let n = parseInt(input);
let f = 2;
let b = 1;
let flag = true;
let dir = false;
n -= 3;
if (n == -2) console.log("1/1");
else if (n == -1) console.log("1/2");
else if (n == 0) console.log("2/1");
else {
  while (n--) {
    if (b == 1 && flag) {
      f++;
      flag = !flag;
      dir = !dir;
    } else if (f == 1 && flag) {
      b++;
      flag = !flag;
      dir = !dir;
    } else if (dir) {
      f--;
      b++;
      flag = f == 1;
    } else {
      f++;
      b--;
      flag = b == 1;
    }
  }
  console.log(`${f}/${b}`);
}
