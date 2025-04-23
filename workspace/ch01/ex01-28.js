/*
유사 배열 객체
*/

/**
 * 전달받은 배열의 모든 요소를 인덱스와 함께 출력한다.
 * @param {[]} arr - 배열
 */
function printarr(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(i, arr[i]);
  }
}

const colorArr = ["orange", "yellow", "green"];

printarr(colorArr);

const arr = {};
printarr(arr);
