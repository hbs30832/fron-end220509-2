let btnSide = document.querySelector(".btnSide");
let nav = document.querySelector("header ul");

btnSide.addEventListener("click", function () {
  if (nav.classList.contains("active")) nav.classList.remove("active");
  else nav.classList.add("active");
});
