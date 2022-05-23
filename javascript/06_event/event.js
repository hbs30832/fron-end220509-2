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
btns[2].onclick = function (e) {
  console.log(e);
  box01[0].style.backgroundColor = "blue";
};

btns[3].onclick = function () {
  if (box01[0].classList.contains("box")) box01[0].classList.remove("box");
  else box01[0].classList.add("box");
  console.log(box01);
};

// 직접 이벤트를 입력하면 덮어쓴다.
btns[3].onclick = function () {
  alert("클릭");
};

// addEventListener를 하면 누적된다.
// addEventListener는 캡처링을 할지 버블링을 할지 정할 수 있다. => 3번째 인자 기본값 fasle.
// => 3번째 false이면 버블링. => true를 입력을 하면 캡처링.
btns[3].addEventListener(
  "click",
  function () {
    if (box01[0].classList.contains("box")) box01[0].classList.remove("box");
    else box01[0].classList.add("box");
    console.log(box01);
  },
  false
);

btns[3].addEventListener("click", function (name) {
  console.log(name);
});
