/*
국어, 영어, 수학 점수의 총점과 평균을 출력하는 프로그램
*/

// 객체로 만들기
const score = new Object();
score.userName = "차차핑";
score.kor = 100;
score.eng = 90;
score.math = 85;
score.sum = score.kor + score.eng + score.math;
score.avg = score.sum / 3;

const score = {
  username: "차차핑",
  kor: 100,
  eng: 90,
  math: 85,
};

console.log("총점", score.sum);
console.log("평균", score.avg);
