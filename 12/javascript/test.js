let btnSide = document.querySelector(".btnSide");
let nav = document.querySelector("header ul");

btnSide.addEventListener("click", function () {
  if (nav.classList.contains("active")) nav.classList.remove("active");
  else nav.classList.add("active");
});

let btnClose = document.querySelector(".popup .btnClose");
let popupBg = document.querySelector(".popupBg");

btnClose.addEventListener("click", () => {
  document.body.style.overflow = "auto";
  popupBg.style.display = "none";
});

let btnList = document.querySelectorAll(".slider .btns .btn");
let sliderUl = document.querySelector(".slider .sliderContainer ul");

// btnList[0].addEventListener("click", function () {});
// btnList[1].addEventListener("click", function () {
//   sliderUl.style.transform = "translateX(-600px)";
// });
// btnList[2].addEventListener("click", function () {
//   sliderUl.style.transform = "translateX(-1200px)";
// });

// querySeletorAll로 nodeList로 할 것!
// forEach => 두번째 인자 index => 0부터 시작 => 곱하기?

console.log(btnList);
btnList.forEach(function (btn, idx) {
  btn.addEventListener("click", () => {
    sliderUl.style.transform = `translateX(-${idx * 600}px)`;
  });
});
