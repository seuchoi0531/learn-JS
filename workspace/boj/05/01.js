/*
제목: 문자와 문자열
설명: 문자열을 입력받고 문자열의 특정 위치를 읽어 봅시다.
제출: https://www.acmicpc.net/submit/27866

문제
단어 S와 정수 i가 주어졌을 때, S의 i번째 글자를 출력하는 프로그램을 작성하시오.

입력
첫째 줄에 영어 소문자와 대문자로만 이루어진 단어 S가 주어진다. 단어의 길이는 최대 1,000이다.
둘째 줄에 정수 i가 주어진다. (1 ≤ i ≤ |S|)

출력
S의 i번째 글자를 출력한다.

예제 입력 1
Sprout
3
예제 출력 1
r

예제 입력 2
shiftpsh
6
예제 출력 2
p

예제 입력 3
Baekjoon
4
예제 출력 3
k
*/

let fs = require("fs");
let input = fs.readFileSync(0, "utf-8").trim().split("\n");
console.log(input[[0][parseInt(input[1]) - 1]]);
