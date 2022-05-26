$(".btns .btnChange").click(function (e) {
  console.log($(".container .card"));
  $(".container .card").css(
    "transform",
    `rotateY(${e.target.dataset.direction}deg)`
  );
});
