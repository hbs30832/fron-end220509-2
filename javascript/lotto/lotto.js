let selectedNum = [];
let lottoNumBox = document.querySelector(".lottoNumBox");

while (selectedNum.length < 6) {
  // Math.random() => 0 ~ 1사이의 실수를 반환. => 44를 곱해서 0~44 범위. 1를 더해 1~45.
  // Math.floor() => 내림.
  let num = Math.floor(Math.random() * 44) + 1;
  if (selectedNum.indexOf(num) === -1) {
    selectedNum.push(num);
  }
}
// [2,5,7,10]
selectedNum.sort(function (a, b) {
  return a - b;
  //   return 값이 양수냐 음수냐에 따라 정렬.
  // 내림차순 => b - a 값이 역전. => 정렬도 반대.
});
// [2,5,7,10]
// Array.prototype.reduce => 누산값, 현재값을 함수의 매개변수로 넣어준다. 두번째 인자는 초기값.
let result = selectedNum.reduce((a, b) => {
  return a + b;
}, 0);
console.log(result);

console.log(selectedNum);

// 배열 관련 함수. => forEach, map, filter

let arr = [
  { id: 3, text: "HTML" },
  { id: 5, text: "CSS" },
  { id: 2, text: "JS" },
  { id: 7, text: "React" },
];
console.log(arr);

// 배열함수로 id:3 아이템 빼고 남겨주세요. 골라내는 함수. 구글링 ok.
// 2

// filter 함수는 return 값이 true인 값만 모아서 배열로 반환. => return boolean값이여야 한다.
// 화살표 함수는 {}(코드블록) 생략시 바로 값을 return.

// let resultArr = arr.filter((item) => item.id !== 2); 아래 코드와 동일하게 동작.
let resultArr = arr.filter(function (item) {
  return item.id !== 2;
});
console.log(resultArr);

const sum = (a, b) => a + b;
console.log(sum(1, 2));

// 원시값 => 숫자, 문자, 불리언 등 변하지 않는 값.
// 참조값 => 값을 변경 참조하는 주소가 변경.

let obj = { name: "seok" };
let copyObj = obj;
copyObj.name = "hwangbo";

console.log(obj, copyObj);
