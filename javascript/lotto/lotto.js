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
