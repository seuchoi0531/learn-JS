function max(n1, n2) {
  // let result // let result = undefined;, 메모리도 줬고 할당도 함(undefined로)  -- A
  let result; // let result != undefined;, 메모리만 줌 -- B
  console.log(result); // undefined -- A // Error -- B
  // let result; // --B
  if (n1 > n2) {
    result = n1;
  } else {
    result = n2;
  }

  return result;
}

console.log(max(10, 20)); // 20
console.log(max(200, 30)); // 200
