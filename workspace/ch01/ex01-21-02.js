/*
for문
*/

/*
 *
 **
 ***
 ****
 *****
 */

/*
 *
 **
 ***
 ****
 *****
 */
let lines = 5;
let rst = "";
for (let i = 0; i < lines; i++) {
  rst = "";
  for (let k = 0; k <= i; k++) {
    rst += "*";
  }
  console.log(rst);
}
console.log();

rst = "";
for (let i = 0; i < lines; i++) {
  rst = "";
  for (let k = 0; k < lines; k++) {
    if (k + i + 1 >= lines) rst += "*";
    else rst += " ";
  }
  console.log(rst);
}
console.log();

rst = "";
for (let i = 0; i < lines; i++) {
  rst = "";
  for (let k = 0; k < lines; k++) {
    if (k < i) rst += " ";
    else rst += "*";
  }
  console.log(rst);
}
console.log();

rst = "";
for (let i = 0; i < lines; i++) {
  rst = "";
  for (let k = 0; k < lines; k++) {
    if (k + i + 1 > lines) rst += " ";
    else rst += "*";
  }
  console.log(rst);
}
console.log("-----------------------------------");
rst = "";
for (let i = 0; i < lines; i++) {
  rst = "";
  for (let k = 0; k < lines; k++) {
    if (k <= i) rst += "*";
    else rst += " ";
  }
  if (i == lines - 1) rst += "*";
  else rst += " ";
  for (let k = 0; k < lines; k++) {
    if (k + i + 1 >= lines) rst += "*";
    else rst += " ";
  }
  console.log(rst);
}

rst = "";
for (let i = 0; i < lines; i++) {
  rst = "";
  for (let k = 0; k < lines; k++) {
    if (k + i + 1 >= lines) rst += "*";
    else rst += " ";
  }
  if (i == 0) rst += "*";
  else rst += " ";
  for (let k = 0; k < lines; k++) {
    if (k <= i) rst += "*";
    else rst += " ";
  }
  console.log(rst);
}
console.log("-----------------------------------");
rst = "";
for (let i = 0; i < lines; i++) {
  rst = "";
  for (let j = 1; j <= lines + i; j++) {
    if (j >= lines - i && j <= lines + i) rst += "*";
    else rst += " ";
  }
  console.log(rst);
}
for (let i = lines - 2; i >= 0; i--) {
  rst = "";
  for (let j = 1; j <= lines + i; j++) {
    if (j >= lines - i && j <= lines + i) rst += "*";
    else rst += " ";
  }
  console.log(rst);
}
// process.stdout.write()
