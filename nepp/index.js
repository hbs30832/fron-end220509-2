let userId = "test";
let userPassword = "test123";

document.querySelector(".btnSubmit").addEventListener("click", function (e) {
  e.preventDefault();
  //   e.preventDefault() => 요소가 가지고 있는 기본 기능을 실행 x.
  //   버튼 눌었을 때
  // input태그에 입력된 값을 가져와야한다.
  // userId, userPassword값과 비교를 해서 맞으면 => 로그인 성공, 틀리면 로그인 실패.

  let inputId = document.querySelector("#inputId");
  let inputPassword = document.querySelector("#inputPassword");
  if (userId === inputId.value && userPassword === inputPassword.value) {
    document.querySelector(
      ".container .leftContent"
    ).innerHTML = `<h2>로그인 성공!</h2>`;

    // document.querySelector(
    //   ".container .leftContent .successText"
    // ).style.display = "block";

    // document.querySelector(".container .formBox").style.display = "none";
  } else {
    alert("아이디와 비밀번호를 확인해주세요");
  }
});

// NodeList => 유사배열이지만 배열의 forEach가 구현되어있다.
// 여러개 가져와서 forEach를 쓰면 각 요소에 접근가능.
let btns = document.querySelectorAll(".accountBtns a");
let btnsByClass = document.getElementsByClassName("btn");
// getElementsByClassName => HTMLCollection => forEach가 구현 x. => 배열로 바꿔서 forEach 사용 가능.
let btnArr = [...btnsByClass];
// 스프레드 문법으로 배열로 전환.
console.log(btnArr);
btns.forEach((item, idx) => {
  console.log(idx);
  if ((idx + 1) % 2 === 0) {
    item.style.color = "red";
  }
});
