/*
querySelector를 이용해서 첫번째, 마지막 항목 출력
*/
console.log("ex05-01-04: querySelector를 이용해서 첫번째, 마지막 항목 출력");
console.log(document.querySelector("#purchases > li:first-child").firstChild.nodeValue);
console.log(document.querySelector("#purchases > li:last-child").firstChild.nodeValue);

// 100 * 100 배열생성
const paper = new Array(100).fill(new Array(100).fill(0));
