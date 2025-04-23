// /*
// 제목:
// 설명:
// 제출:

// */
let fs = require("fs");
let input = fs.readFileSync(0, "utf-8").trim().split("\n");
let t = parseInt(input[0]);
let dic = {};
let rst = "";
let i = 1;
while (t) {
  let n = 0;
  n = parseInt(input[i]);
  t--;
  for (let k = i + 1; k < i + 1 + n; k++) {
    if (dic[input[k].trim().split(" ")[1]] == undefined) dic[input[k].trim().split(" ")[1]] = 1;
    else dic[input[k].trim().split(" ")[1]] += 1;
  }
  i += n;
  let tmp = 1;
  for (q in dic) tmp *= dic[q] + 1;
  tmp -= 1;
  rst += tmp + "\n";
  dic = {};
  i++;
}
console.log(rst);
