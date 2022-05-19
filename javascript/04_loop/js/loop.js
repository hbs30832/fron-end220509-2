// 1. for문
// (초기값 ; 조건 ; 증감식)
// 조건에 충족을 하면 다음 명령을 실행. => 증감식을 실행.
var num = 0;
for (var i = 1; i <= 1000; i++) {
  num += i;
}
document.write(num);

for (var i = 2; i <= 9; i++) {
  document.write("<h3>" + i + "단</h3>");
  for (var j = 1; j <= 9; j++) {
    document.write(i + "*" + j + "=" + i * j + "<br>");
  }
}

// 2. while문
// () 안에 있는 값이 true면 계속 반복한다.
// 특정 조건에서 while 문안에서 boolean값을 바꿔서 반복문을 종료. => ex) 특정 버튼 클릭.
// break를 통해서 while 문을 탈출.
// continue를 통해서 1번만 건너뛴다.

var i = 0;
while (i < 10) {
  i++;
  if (i == 3) break;
  // console.log(i);
}

// while문 문제
// 0~20 까지의 수 중에 짝수만 출력 => 0은 출력되면 안된다.
var idx = 0;
while (idx <= 20) {
  if (idx === 0) {
    idx += 1;
    continue;
  }
  if (idx % 2 === 0) {
    console.log(idx);
  }
  idx += 1;
}

// while문 문제 2
// 1부터 입력받은 숫자까지 더하기.
// var num4 = Number(prompt("숫자를 입력하세요", ""));
var startNum = 1;
var result = 0;

while (startNum <= 5) {
  result += startNum++;
}
console.log(result);

var isPaused = false;
while (!isPaused) {
  isPaused = window.confirm("멈출래?");
}
