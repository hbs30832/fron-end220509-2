let inputText = document.querySelector("#inputText");
let btnSubmit = document.querySelector(".btnSubmit");
let todoList = document.querySelector(".todoList");
let todos;

// 버튼 클릭 감지!

let todoArr = JSON.parse(localStorage.getItem("todoArr"));
// [
//   {
//     id: 1,
//     text: "sdfjksljf",
//   },
// ];

// dataset => 개발자가 넣고 싶은 속성을 태그에 넣을 수 있다. => 권장. 표준.
// data라는 접두사 뒤에 -로 단어를 구분해서 속성명을 짓는다. => ex) <li data-todo-id>내용</li>
// 읽을 때는 카멜케이스로 읽는다. => todoId

// submit => 화면에 출력할 데이터를 추가. =>  render() => 배열에서 값을 읽어서 li 태그로 화면에 출력.

function render02() {
  let todoListStr = "";
  todoArr.forEach(function (todo) {
    console.log(todo.text);
    todoListStr += `<li data-todo-id=${todo.id}>${todo.text}</li>`;
  });
  console.log(todoListStr);
  todoList.innerHTML = todoListStr;

  // 쓰레기 코드. => 출력할 때마다 출력한 li 읽어온다.
  // => 읽어올 때마다 이벤트 리스너를 추가. => 수십, 수백개가 되면 문제가 많다.

  // todos = document.querySelectorAll(".todoList li");

  // todos.forEach((item) => {
  //   item.addEventListener("click", function (e) {
  //     let todoId = Number(e.target.dataset.todoId);
  //     todoArr = todoArr.filter((item) => {
  //       return item.id !== todoId;
  //     });
  //     render02();
  //     // console.log(this.dataset.todoId);
  //   });
  // });
}

// e.target => 현재 이벤트의 대상.
// 이벤트 위임.

todoList.addEventListener("click", function (e) {
  // console.log(e.target.dataset.todoId);
  if (e.target.matches(".todoList li")) {
    console.dir(e.target);
    let todoId = Number(e.target.dataset.todoId);
    todoArr = todoArr.filter((item) => {
      return item.id !== todoId;
    });
  }
  render02();
});

render02();

inputText.addEventListener("keydown", function (e) {
  if (e.code === "Enter") {
    submit();
  }
});

btnSubmit.addEventListener("click", () => {
  console.log(btnSubmit.dataset.buttonId);
  submit();
});

function submit() {
  let currentId = todoArr[todoArr.length - 1].id;

  todoArr.push({
    id: currentId + 1,
    text: inputText.value,
  });
  let todoArrJson = JSON.stringify(todoArr);
  localStorage.setItem("todoArr", todoArrJson);

  render02();
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
