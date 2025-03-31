/*
제목: 삼각형 외우기
설명: 각도를 보고 삼각형을 판별하고 분류하는 문제
제출: https://www.acmicpc.net/submit/10101

문제
창영이는 삼각형의 종류를 잘 구분하지 못한다. 따라서 프로그램을 이용해 이를 외우려고 한다.

삼각형의 세 각을 입력받은 다음,

세 각의 크기가 모두 60이면, Equilateral
세 각의 합이 180이고, 두 각이 같은 경우에는 Isosceles
세 각의 합이 180이고, 같은 각이 없는 경우에는 Scalene
세 각의 합이 180이 아닌 경우에는 Error
를 출력하는 프로그램을 작성하시오.

입력
총 3개의 줄에 걸쳐 삼각형의 각의 크기가 주어진다. 
모든 정수는 0보다 크고, 180보다 작다.

출력
문제의 설명에 따라 Equilateral, Isosceles, Scalene, Error 중 하나를 출력한다.

[AI가 추가한 테스트 케이스 10개]

예제 입력 1
60
70
50
예제 출력 1
Scalene

예제 입력 2
60
60
60
예제 출력 2
Equilateral

예제 입력 3
30
60
90
예제 출력 3
Scalene

예제 입력 4
70
70
40
예제 출력 4
Isosceles

예제 입력 5
45
45
90
예제 출력 5
Isosceles

예제 입력 6
50
50
80
예제 출력 6
Isosceles

예제 입력 7
90
90
45
예제 출력 7
Error

예제 입력 8
50
60
70
예제 출력 8
Scalene

예제 입력 9
20
30
40
예제 출력 9
Error

예제 입력 10
90
45
45
예제 출력 10
Isosceles

예제 입력 11
60
60
61
예제 출력 11
Error
*/

let fs = require("fs");
let input = fs.readFileSync(0, "utf-8").trim().split("\n");
let a = parseInt(input[0]);
let b = parseInt(input[1]);
let c = parseInt(input[2]);
if (a + b + c != 180) console.log("Error");
else if (a == b && b == c) console.log("Equilateral");
else if (a == b || b == c || c == a) console.log("Isosceles");
else console.log("Scalene");
