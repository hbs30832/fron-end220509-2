let inputText = document.querySelector("#inputText");
let btnSubmit = document.querySelector(".btnSubmit");
let todoList = document.querySelector(".todoList");
let todos = document.querySelectorAll(".todoList li");

// 버튼 클릭 감지!

let todoArr = JSON.parse(localStorage.getItem("todoArr"));

console.log(todoArr);

function render02() {
  todoArr.forEach(function (todo) {
    console.log(todo.text);
    todoList.innerHTML += `<li>${todo.text}</li>`;
  });
}
render();
console.log(render02);

inputText.addEventListener("keydown", function (e) {
  if (e.code === "Enter") {
    submit();
  }
});

btnSubmit.addEventListener("click", () => {
  submit();
});

function submit() {
  todoArr.push({
    id: todoArr[todoArr.length - 1].id + 1,
    text: inputText.value,
  });
  let todoArrJson = JSON.stringify(todoArr);
  localStorage.setItem("todoArr", todoArrJson);

  render();
}

function render() {
  // todoList.innerHTML = "";

  // while (todoList.firstChild) {
  //   todoList.removeChild(todoList.lastChild);
  // }

  // querySelectorAll => NodeList를 반환 => forEach를 통해 각 item 직접 삭제.

  document.querySelectorAll(".todoList li").forEach((item) => {
    // todoList.removeChild(item);
    item.remove();
  });

  todoArr.forEach(function (item) {
    // node 만들어서 appendChild
    let liElem = document.createElement("li");
    let textNode = document.createTextNode(item.text);

    liElem.appendChild(textNode);
    todoList.appendChild(liElem);

    inputText.value = "";
    inputText.focus();

    // innerHTML 사용법.
    // todoList.innerHTML += "<li>" + inputText.value + "</li>";
  });
}

function test01() {
  let str = "";
  for (let i = 0; i < 1000; i++) {
    str += `<li>${i}</li>`;
  }
  todoList.innerHTML = str;
}

let start = new Date();
// test02();
let end = new Date();
console.log(end - start);

function test02() {
  for (let i = 0; i < 1000; i++) {
    let li = document.createElement("li");
    let textNode = document.createTextNode(i);
    li.appendChild(textNode);
    todoList.appendChild(li);
  }
}

console.log(localStorage.getItem("isSaved"));
// localStorage => 저장공간. 사이트마다 개별적으로 저장한다. => 브라우저를 껐다켜도 저장되어 있다.
// key : value 형태로 저장.
// localStorage.setItem(키값, 저장하려는 데이터값);
// localStorage.getItem(키값) => 키값에 해당하는 데이터값 리턴.

let todoArrJson = JSON.stringify(todoArr);
localStorage.setItem("todoArr", todoArrJson);
localStorage.removeItem("isSaved");
console.log(todoArrJson);

console.log(btnSubmit.dataset.buttonId);

//  버블링, 캡처링, 이벤트 위임

// [1,2,3,4,5] => localStorage에서 다시 읽어올 대 데이터를 제대로 사용 x.
//  => JSON형태로 저장.
// JSON.stringity(값) => 값을 JSON형태로 변환.
// localStorage에 저장이 잘 됨.
// JSON.forEach() => 틀림.
// [{"id": "1"}]
// 그냥 배열을 저장하면 문자열(string)로 저장. => 문자열에서 배열로 바꾸는게 x.
// JSON으로 변환해서 저장하면 => 꺼내올 때 JSON에서 배열로 전환 가능.
