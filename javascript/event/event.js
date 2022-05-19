// 이벤트
// 사용자가 브라우저 하는 모든 행동. => ex) 마우스 클릭, 스크롤, 키보드 입력 등
let box = document.querySelector(".box");
let boxList = document.querySelectorAll(".box");
let btns = document.querySelectorAll("button");
let box01 = document.getElementsByClassName("box");
btns[0].onclick = function () {
  box01[0].style.backgroundColor = "black";
};
btns[1].onclick = function () {
  box01[0].style.backgroundColor = "red";
};
btns[2].onclick = function () {
  box01[0].style.backgroundColor = "blue";
};
btns[3].onclick = function () {
  if (box01[0].classList.contains("box")) box01[0].classList.remove("box");
  else box01[0].classList.add("box");
  console.log(box01);
};
