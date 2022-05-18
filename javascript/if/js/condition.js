// 조건문 => 조건에 따라 코드 블록 안에 있는 코드들을 전부 실행.
// 조건문 () 안에는 true, false가 들어온다.
// var birthYear = prompt("태어난 연도를 입력하세요.");
// var currentYear = 2022;
// var age = currentYear - birthYear + 1;

// 3의 배수인지 확인하기. prompt("숫자를 입력하세요.", "");

var num = prompt("숫자를 입력해주세요.", "");

if (num !== null) {
  if (num % 3 === 0) {
    document.write("3의 배수입니다");
  } else {
    document.write("3의 배수가 아닙니다.");
  }
} else {
  document.write("숫자를 입력하지 않았습니다.");
}
