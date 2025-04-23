/*
반환값이 있는 함수
*/

add(); //　110
add(); //　110

add100(10); // 110
add100(20); // 120

sum(10, 20); // 30
sum(30, 40); // 70

// 10 + 100의 결과를 출력하는 함수 (add)
function add() {
  const num1 = 10;
  const num2 = 100;
  const sum = num1 + num2;
  console.log(sum);
}

// 전달받은 숫자와 100의 합계를 출력하는 함수 (add100)
function add100(inputNum) {
  const num = 100;
  const sum = num + inputNum;
  console.log(sum);
}

// 전달받은 두 숫자의 합계를 출력하는 함수 (sum)
function sum(inputNum1, inputNum2) {
  const sum = inputNum1 + inputNum2;
  console.log(sum);
}

// 전달받은 두 숫자의 합계를 반환하는 함수 (getSum)
function getSum(inputNum1, inputNum2) {
  const result = inputNum1 + inputNum2;
  return result;
}

let returnVal = getSum(40, 50);
console.log(returnVal);
console.log(getSum(40, 50));
