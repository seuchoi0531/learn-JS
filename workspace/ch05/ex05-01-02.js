/*
첫 번째 구매 항목 출력(두부)하고 그 값을 양파로 수정
document.getElementById(id): id 속성으로 요소 선택
텍스트 노드의 nodeValue: 문자열 값
*/
console.log("ex05-01-02: 첫 번째 구매 항목 출력하고 그 값을 양파로 수정");
const shoppingList1 = document.getElementById("purchases");
const listLi = shoppingList1.getElementsByTagName("li");
console.log(listLi[0].firstChild.nodeValue);
listLi[0].firstChild.nodeValue = "양파";
