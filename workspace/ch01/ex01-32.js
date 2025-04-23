/*
매개변수를 가진 함수 - 도어락
도어락은 비밀번화가 입력되면 문이 열린다
잘못된 비밀번호가 입력되면 경보음이 울린다
*/

function doorLock(password = "9999") {
  console.log("입력한 비밀번호 : " + password);
  const pwd = "1234";
  const subPassword = password.slice(pwd.length);
  console.log("입력한 비이밀번호 : " + subPassword);
  if (password === pwd) {
    console.log("문이 열립니다.");
  } else {
    console.log("웨에에에에에에에엥");
  }
  console.log("----------------");
}

doorLock("1143211");
doorLock("12342314242121234");
doorLock();
