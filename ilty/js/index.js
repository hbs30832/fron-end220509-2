// let depth01 = document.querySelector("header #gnb .gnbList .depth01");
// console.log(depth01);
// depth01.addEventListener("mouseleave", function (e) {
//   setTimeout(function () {
//     e.target.children[1].classList.add("hidden");
//   }, 400);
// });

$("header #gnb .gnbList .depth01").on("mouseleave", function () {
  $(this).children("ul").fadeOut();
});

$("header #gnb .gnbList .depth01").on("mouseover", function () {
  $(this).children("ul").fadeIn();
});
