/*

if문의 다양한 사용 예제
연산자는 +, -, *, / 만 입력가능
잘못된 연산자를 입력할 경우 "잘못된 입력" 출력

*/

// 지정한 연산자와 숫자를 받아서 사칙 연산을 수행하는 프로그램

const operator = "+";
const n1 = 10;
const n2 = 20;
let result1 = 0;
switch (operator) {
  case "+":
    result1 = n1 + n2;
    break;
  case "-":
    result1 = n1 - n2;
    break;
  case "*":
    result1 = n1 * n2;
    break;
  case "/":
    result1 = n1 / n2;
    break;
  default:
    result1 = "잘못된 입력";
}
console.log(result1);

/*
1 ~ 7 사이의 숫자를 받아서 해당 요일을 출력하는 프로그램
1은 월요일, 2는 화요일, ... 7은 일요일
1 ~ 7 사이의 숫자가 아닐 경우 "잘못된 입력" 출력
*/

const day = 4;
let result2 = null;
switch (day) {
  case 1:
    result2 = "월요일";
    break;
  case 2:
    result2 = "화요일";
    break;
  case 3:
    result2 = "수요일";
    break;
  case 4:
    result2 = "목요일";
    break;
  case 5:
    result2 = "금요일";
    break;
  case 6:
    result2 = "토요일";
    break;
  case 7:
    result2 = "일요일";
    break;
  default:
    result2 = "잘못된 입력";
}
console.log(result2);

/*
1 ~ 12 사이의 월을 받아서 게절을 출력하는 프로그램
봄: 3 ~ 5월, 여름: 6 ~ 8월, 가을: 9 ~ 11월, 겨울: 12 ~ 2월
1 ~ 12 사이의 숫자가 아닐 경우 "잘못된 입력" 출력
*/

const month = 4;
let result3 = null;
switch (result3) {
  case 1:
    result3 = "겨울";
    break;
  case 2:
    result3 = "겨울";
    break;
  case 3:
    result3 = "겨울";
    break;
  case 4:
    result3 = "봄";
    break;
  case 5:
    result3 = "여름";
    break;
  case 6:
    result3 = "여름";
    break;
  case 7:
    result3 = "여름";
    break;
  case 8:
    result3 = "여름";
    break;
  case 9:
    result3 = "여름";
    break;
  case 10:
    result3 = "여름";
    break;
  case 11:
    result3 = "가을";
    break;
  case 12:
    result3 = "겨울";
    break;
  default:
    result3 = "잘못된 입력";
}
console.log(result3);
