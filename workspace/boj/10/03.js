/*
제목: 네 번째 점
설명: 직사각형을 완성하는 문제
제출: https://www.acmicpc.net/submit/3009

문제
세 점이 주어졌을 때, 축에 평행한 직사각형을 만들기 위해서 필요한 네 번째 점을 찾는 프로그램을 작성하시오.

입력
세 점의 좌표가 한 줄에 하나씩 주어진다. 좌표는 1보다 크거나 같고, 1000보다 작거나 같은 정수이다.

출력
직사각형의 네 번째 점의 좌표를 출력한다.

    #(5,7)----*(7,7)
    |         |
    |         |
    #(5,5)----#(7,5)
    [예제 1]

    #(10,20)------#(30,20)
    |             |
    |             |
    #(10,10)------*(30,10)
    [예제 2]

* 두 점의 x 좌표가 같아야 하고, 두 점의 y 좌표가 같아야 한다.
* 주어진 x 좌표 3개 중 다른 하나가 직사각형의 네 번째 점의 x 좌표이다.
* 주어진 y 좌표 3개 중 다른 하나가 직사각형의 네 번째 점의 y 좌표이다.

예제 입력 1
5 5
5 7
7 5
예제 출력 1
7 7

예제 입력 2
30 20
10 10
10 20
예제 출력 2
30 10
*/

let fs = require("fs");
let input = fs.readFileSync(0, "utf-8").trim().split("\n");
let arr = [];
arr.push(parseInt(input[0].trim().split(" ")[0]));
arr.push(parseInt(input[0].trim().split(" ")[1]));
arr.push(parseInt(input[1].trim().split(" ")[0]));
arr.push(parseInt(input[1].trim().split(" ")[1]));
arr.push(parseInt(input[2].trim().split(" ")[0]));
arr.push(parseInt(input[2].trim().split(" ")[1]));
let rst = "";

if (arr[0] == arr[2]) rst += arr[4];
else if (arr[0] == arr[4]) rst += arr[2];
else rst += arr[0];
rst += " ";
if (arr[1] == arr[3]) rst += arr[5];
else if (arr[1] == arr[5]) rst += arr[3];
else rst += arr[1];
console.log(rst);
