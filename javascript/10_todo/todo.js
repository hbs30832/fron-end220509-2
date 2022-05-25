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

// 배열

let arr = [1, 2, 3, 4, 5];

// for문과 배열.length를 통해서 배열을 순회하는 방법. => 배열 고차함수보다 고성능.
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// 1. Array.forEach() => 배열을 순회하면서 함수를 실행. return 값 x.
// 인자로 들어온 함수의 매개변수로 각 아이템을 넣어준다.
// 함수(첫번째 아이템) 실행 => 함수(두번째 아이템).... => 함수(마지막 아이템)

arr.forEach(function (number) {
  console.log(number);
});

// 두번째 인자로 각 아이템의 인덱스를 넣어준다. => map과 filter로 마찬가지.
arr.forEach(function (number, idx) {
  console.log(idx + 1 + "번째");
});

// 2. Array.filter() => 배열을 순회하면서 함수를 실행하며 필터링.
// => filter 안의 함수의 return값이 true, fasle에 따라 필터링.
// => filter 안의 함수의 return 값이 true인 차례에만 해당 아이템을 새로운 배열 넣어서
// => filter함수가 완전히 끝나면 이 배열을 return.

let filterArr = arr.filter((num) => {
  return num >= 3;
});

// 화살표함수는 코드블록을 생략하면 바로 값을 return.
let filterArr02 = arr.filter((num) => num >= 3);

// 3. Array.map() => 배열을 순회하면서 함수를 실행하며 값을 변환.
// => 배열의 각 아이템을 map 안의 함수의 return 값으로 바꾼다.
// 이 바뀐값들을 모아서 새로운 배열로 반환.

let mapArr = arr.map((num) => {
  return num + "번째 아이템";
});
console.log(mapArr);

// 함수
// 어떠한 작업을 하기 위해 독립적으로 미리 작성된 코드. => 코드블록으로 작성.
// => 개발자가 원하는 때에 실행 가능.
// 반복적으로 같은 코드를 작성하는 것을 피할 수가 있다.

// 함수선언식 => 호이스팅 o.
// 나머지 호이스팅 x. => 함수표현식, 화살표함수

// 매개변수의 순서, 개수를 잘 지켜야한다.
// 함수이름과 매개변수의 이름을 잘 지어야 다른사람이 봤을 때 무슨 함수인지 알 수 있다.

function 더하기(숫자1, 숫자2) {
  return 숫자1 + 숫자2;
}

function getFullName(firstName, lastName) {
  return lastName + firstName;
}

console.log(getFullName("hwangbo", "seok")); // 매개변수 순서.

// 함수안에서 자기자신(함수)를 호출 할 수 있다.
function 재귀함수(num) {
  if (num <= 1) {
    return 1;
  }
  return num + 재귀함수(num - 1);
}

// 클로저
// 하위 스코프에서 상위 스코프의 값을 참조를 하고 있으면
// 상위 스코프의 생명주기가 끝나도 참조하고 있는 값이 사라지지 않는다.
// 직접 접근하지 못하기 때문에 캡슐화할 수 있다.

function 클로저() {
  let num = 0;
  return function (type) {
    if (type === "increase") {
      num++;
    } else if (type === "decrease") {
      num--;
    }
    console.log(num);
  };
}
let 클로저함수 = 클로저();
클로저함수("decrease");
클로저함수("decrease");
클로저함수("decrease");
클로저함수("increase");
클로저함수("increase");
클로저함수("increase");
클로저함수("increase");

// 부록 => 스택, 큐, 이벤트 루프

// NodeList => 요소를 배열처럼 담는다.
// [node, node, node];
document.querySelectorAll(".container .todoList li");
// [node, node, node].style.display = "none"; 틀린문법.

// 각 인덱스로 접근 적용을 하면 잘 되지만 번거롭다.
node[0].style.display = "none";
node[1].style.display = "none";
node[2].style.display = "none";

// 유사배열이지만 forEach가 구현이 되어있기 때문에 이용하면 모든 노드에 적용 가능.
// 노드리스트.forEach(node => [
//   node.style.display = "none";
// ])
