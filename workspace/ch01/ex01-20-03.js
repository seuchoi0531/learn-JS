/*
첫날에 쌀을 한톨 받습니다.
둘째날 쌀을 두톨 받습니다.
세째날 쌀을 네톨 받습니다.
매일 전날의 두배가 되는 쌀알을 받아서 모으면 몇일을 모아야 쌀알을 천만개 모을수 있을까?
*/
let count = 1;
let day = 0;
let sum = 0;
let countString = "";
let sumString = "";
while (sum < 10000000) {
  countString = "";
  sumString = "";
  sum += count;
  count = count * 2;
  day++;
  let tmp = 0;
  let tmpstr = count.toString();
  for (let i = tmpstr.length - 1; i >= 0; i--) {
    if (tmp % 3 == 2 && i != 0) countString = "," + tmpstr[i] + countString;
    else countString = tmpstr[i] + countString;
    tmp++;
  }
  tmp = 0;
  tmpstr = sum.toString();
  for (let i = tmpstr.length - 1; i >= 0; i--) {
    if (tmp % 3 == 2 && i != 0) sumString = "," + tmpstr[i] + sumString;
    else sumString = tmpstr[i] + sumString;
    tmp++;
  }
  console.log(`${day}일 동안 받았더니 쌀알이 ${sumString}개 되었다. 내일은 ${countString}개 받을 수 있겠군.`);
}
console.log(day + "일 모으면 천만개 모을 수 있습니다");

while (day < 30) {
  sum += count;
  count = count * 2;
  day++;
}
sumString = "";
let tmp = 0;
let rststr = sum.toString();
for (let i = rststr.length - 1; i >= 0; i--) {
  if (tmp % 3 == 2 && i != 0) sumString = "," + rststr[i] + sumString;
  else sumString = rststr[i] + sumString;
  tmp++;
}
console.log(day + "일 모으면 " + sumString + "개 모을 수 있습니다");

day = 0;
while (2 ** day < 10000000) console.log(`${day + 1}일 동안 받았더니 쌀알이 ${2 ** (day + 1) - 1}개 되었다. 내일은 ${2 ** (day++ + 1)}개 받을 수 있겠군.`);
