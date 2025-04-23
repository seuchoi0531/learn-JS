/*
for 문을 이용해서 구구단 작성

출력 예시:
3 x 1 = 3
3 x 2 = 6
...
3 x 9 = 27
*/

let dan = 3;

for (let i = 1; i < 10; i++) {
  console.log(`${dan} x ${i} = ${dan * i}`);
}
console.log("\n-----------------------------\n");

for (let i = 1; i < 10; i++) {
  if (i == 1 || i == 2 || i == 9) console.log(`${dan} x ${i} = ${dan * i}`);
  else if (i == 8) console.log("...");
}
console.log("\n-----------------------------\n");

/*
2단부터 9단까지 출력
출력 예시
2 x 1 = 2
2 x 2 = 4
....
9 x 8 = 72
9 x 9 = 81
*/
for (let dan = 2; dan <= 9; dan++) {
  for (let i = 1; i <= 9; i++) {
    // console.log(`${dan} x ${i} = ${dan * i}`);
    if (i == 1 || i == 2 || i == 9) {
      console.log(`${dan} x ${i} = ${dan * i}`);
    } else if (i == 8) {
      console.log("...");
    }
  }
  console.log("\n-----------------------------\n");
}

let rst = "";
for (let i = 1; i <= 9; i++) {
  rst = "";
  for (let dan = 2; dan <= 9; dan++) {
    rst += `${dan} x ${i} = ${dan * i}`;
    rst += "\t";
  }
  console.log(rst);
}
