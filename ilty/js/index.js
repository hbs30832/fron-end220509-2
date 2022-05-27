let depth01List = document.querySelectorAll("header #gnb .gnbList .depth01");
depth01List.forEach((depth01) => {
  // forEach 한번만.
  let depth02 = depth01.children[1];
  depth01.addEventListener("mouseover", function () {
    depth02.style.display = "block";
    setTimeout(function () {
      depth02.style.opacity = "1";
    }, 0);
  });
  depth01.addEventListener("mouseleave", function () {
    depth02.style.opacity = "0";
    setTimeout(() => {
      depth02.style.display = "none";
    }, 400);
  });
  //
});

// $("header #gnb .gnbList .depth01").on("mouseover", function (e) {
//   $(this).children("ul").fadeIn();
// });

// $("header #gnb .gnbList .depth01").on("mouseleave", function (e) {
//   $(this).children("ul").fadeOut();
// });
