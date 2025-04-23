/*
첫번째와 마지막 구매 항목을 출력
firstChild, firstElementChild, lastChild, lastElementChild: 자식요소 접근
*/
console.log("ex05-01-03: 첫 번째와 마지막 구매 항목을 출력");
const shoppingList2 = document.getElementById("purchases");
const firstChild = shoppingList2.firstElementChild;
console.log(firstChild.firstChild.nodeValue);
let cocacola = firstChild.nextElementSibling;
let i = 0;
while (i < 9) {
  if (i % 2 == 0) {
    cocacola = cocacola.nextElementSibling;
  } else {
    cocacola = cocacola.previousElementSibling;
  }
  i++;
}
console.log(cocacola.firstChild.nodeValue);
