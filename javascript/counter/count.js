let number = document.getElementById("number");
let increase = document.getElementById("increase");
let decrease = document.getElementById("decrease");

increase.onclick = () => {
  const currentNum = parseInt(number.innerText, 10);
  number.innerText = currentNum + 1;
};

decrease.onclick = () => {
  const currentNum = parseInt(number.innerText, 10);
  number.innerText = currentNum - 1;
};
