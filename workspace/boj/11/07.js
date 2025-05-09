/*
제목: 알고리즘 수업 - 점근적 표기 1
설명: 시간 복잡도는 빅-O 표기법으로 표현할 수 있습니다. 정확한 정의보다는 "이 함수에 비례한다" 정도만 기억해도 무방합니다.
제출: 

문제
오늘도 서준이는 점근적 표기 수업 조교를 하고 있다. 
아빠가 수업한 내용을 학생들이 잘 이해했는지 문제를 통해서 확인해보자.
알고리즘의 소요 시간을 나타내는 O-표기법(빅-오)을 다음과 같이 정의하자.

O(g(n)) = {f(n) | 모든 n ≥ n₀에 대하여 f(n) ≤ c × g(n)인 양의 상수 c와 n₀가 존재한다}
이 정의는 실제 O-표기법(https://en.wikipedia.org/wiki/Big_O_notation)과 다를 수 있다.
함수 f(n) = a₁n + a₀, 양의 정수 c, n₀가 주어질 경우 O(n) 정의를 만족하는지 알아보자.

입력
첫째 줄에 함수 f(n)을 나타내는 정수 a₁, a₀가 주어진다. (0 ≤ |aᵢ| ≤ 100)
다음 줄에 양의 정수 c가 주어진다. (1 ≤ c ≤ 100)
다음 줄에 양의 정수 n₀가 주어진다. (1 ≤ n₀ ≤ 100)

출력
f(n), c, n₀가 O(n) 정의를 만족하면 1, 아니면 0을 출력한다.

* 예제 1: f(n) = 7n + 7, g(n) = n, c = 8, n₀ = 1이다. f(1) = 14, c × g(1) = 8이므로 O(n) 정의를 만족하지 못한다.
* 예제 2: f(n) = 7n + 7, g(n) = n, c = 8, n₀ = 1이다. 모든 n ≥ 10에 대하여 7n + 7 ≤ 8n 이므로 O(n) 정의를 만족한다.

[AI가 추가한 테스트 케이스 10개]
예제 입력 1
7 7
8
1
예제 출력 1
0

예제 입력 2
7 7
8
10
예제 출력 2
1

예제 입력 3
50 50
51
10
예제 출력 3
0

예제 입력 4
99 0
100
50
예제 출력 4
1

예제 입력 5
100 1
99
99
예제 출력 5
0

예제 입력 6
0 100
1
100
예제 출력 6
1

예제 입력 7
1 100
3
50
예제 출력 7
1

예제 입력 8
-50 50
50
20
예제 출력 8
1

예제 입력 9
50 -50
51
20
예제 출력 9
1

예제 입력 10
100 100
99
100
예제 출력 10
0

예제 입력 11
7 1
7
1
예제 출력 11
0

예제 입력 12
0 0
1
1
예제 출력 12
1
*/

let fs = require("fs");
let input = fs.readFileSync(0, "utf-8").trim().split("\n");
let a1 = parseInt(input[0].split(" ")[0]);
let a0 = parseInt(input[0].split(" ")[1]);
let c = parseInt(input[1]);
let n0 = parseInt(input[2]);
if (c - a1 < 0) console.log(0);
else if ((c - a1) * n0 >= a0) console.log(1);
else console.log(0);
