// 함수 : 여러 명령들을 한번에 실행할 수 있는 코드 블록.
// 원하는 시점에 실행 가능. => 재사용성이 높아진다.

// 1. 함수 선언식(기명 함수). => 함수 호이스팅 발생.
// 작성 방법 : function 함수이름() { 코드 작성 };

// 의사 코드
// function func() {
//     console.log("내 이름은");
//     console.log("황보 석");
// }
// var func2;

func();
// 2. 함수 표현식(익명 함수). => 함수 호이스팅 발생 x => 변수명만 호이스팅.
// 작성 방법 :

var func2 = function () {
  console.log("나는 함수 표현식.");
};
func2();

function func() {
  console.log("나는 함수 선언식");
}

// 3. 화살표 함수
// 함수 호이스팅 발생 x.
// this 바인딩 x.

var func3 = () => {
  console.log("나는 화살표 함수");
};
func3();
// func3();
// func3();
// func3();
// func3();

// 매개 변수(parameter)
// 함수 안에서 사용할 수 있는 변수 => 함수를 실행할 때 () 안에 입력.
// 실제로 변수에 입력되는 값 => 인자(argument).
// 매개 변수는 원하는 만큼 선언. => 매개 변수와 인자의 개수가 달라도 오류 발생 x.
// (a = 3) => 매개 변수 a에 입력하지 않았을 때 기본값 3으로 사용.

function sum(a, b, c = 3) {
  console.log(a + b + c);
}
sum(1, 3, 5, 7);
sum(5, 7);

// return
// 함수 실행 결과를 반환.
// return 이후의 코드는 실행되지 않는다.

function sub(a, b) {
  return a - b;
  console.log("함수 실행 끝!");
}
let result = sub(3, 2);
console.log(sub(3, 2));

// 함수 문제
// 점수 3개 입력시 평균 점수를 구해주는 함수. 변수에 담자.
// 응용 문제 : 더하기와 나누기를 분리.

function getAverage(kor, math, eng) {
  return (kor + math + eng) / 3;
}

function sumScore(kor, math, eng) {
  return kor + math + eng;
}
function divideScore(score) {
  return score / 3;
}

let averageScore = divideScore(sumScore(90, 90, 90));
// alert(averageScore);

// 스코프
// 지역 변수와 전역 변수
// 지역 변수 : 유효 범위(스코프) 내에서만 사용 가능한 변수.
// 전역 변수 : 어디서든 사용 가능한 변수.
// 클로저 추후에 공부 추천. => 공부하면 면접 유리하다.

function sumString(str) {
  let greetingStr = "안녕하세요";
  console.log(result);
  if (true) {
    let innerStr = "출력될까요?";
    console.log(innerStr);
    console.log(greetingStr);
  }
  //   console.log(inner);
  return greetingStr + str + "님";
}
// console.log(greetingStr);
console.log(sumString("황보석"));

// 즉시 실행 함수
// 클로저에 사용.

let resultNum = (function () {
  let num = 1;
  return function () {
    num++;
    console.log(num);
  };
})();

resultNum();
resultNum();
resultNum();
resultNum();
resultNum();
