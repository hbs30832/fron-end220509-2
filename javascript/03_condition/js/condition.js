// 조건문 => 조건에 따라 코드 블록 안에 있는 코드들을 전부 실행.[]
// 1. if
// if ()안의 값이 true면 if의 코드 블록, false면 else에 있는 코드 블록을 실행.
// else if를 통해 조건을 여러개를 사용할 수 있다.

// var num = prompt("숫자를 입력해주세요.", "");

//
// 2. switch
// switch는 실행할 명령이 많을 때 사용. => 처리해야될 분기점이 많을 때.
// () 안에 있는 값과 case의 값을 비교해서 값이 같다면 해당 case의 코드를 실행.
// 해당하는 case 코드를 실행한 후에 다음 case들도 모두 실행. => break를 사용해서 탈출.

var score = Number(prompt("숫자를 입력해주세요.", ""));
console.log(Math.round(score / 10));
// ceil, round, floor => 올림, 반올림, 내림
switch (Math.floor(score / 10)) {
  // if(num == "1")
  case 10: {
    alert("만점입니다.");
    break;
  }
  case 9: {
    alert("A등급입니다.");
    break;
  }
  case 8: {
    alert("B등급입니다.");
    break;
  }
  case 7: {
    alert("C등급입니다.");
    break;
  }
  case 6: {
    alert("D등급입니다.");
    break;
  }
  default: {
    alert("F등급입니다.");
  }
}

// switch 문제
// score는 0~100.
// 90점 이상은 A, 80점 이상은 B, 70점 이상은 C, 60점 이상은 D, 그 미만은 F로 출력.
