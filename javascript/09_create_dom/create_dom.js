let container = document.querySelector(".container");

// document.createElement => 문서 안에 Element Node를 생성.
let boxElem = document.createElement("div");
// document.createTextNode => 문서 안에 Text Node 생성
let boxText = document.createTextNode("박스");

// Element Node에 class 속성 추가.
boxElem.classList.add("box");
// Element Node에 Text Node 추가.
boxElem.appendChild(boxText);
// .container 요소에 boxElem 추가.
container.appendChild(boxElem);

// innerText, innerHTML을 통해 기존 자식 요소 지우지 않고 추가하는 방법.
boxElem.innerText = "글자";
boxElem.innerText += "글자";
boxElem.innerHTML = "<p>문단</p>";
boxElem.innerHTML += "<p>문단2</p>";

// 요소 삭제
// parentNode를 통해 부모 요소에 접근하여 removeChild(삭제할 자식 요소 노드)로 삭제.
// container.removeChild(boxElem);
let child = document.querySelector(".box");
// let childList = document.querySelectorAll(".box");
boxElem.parentNode.removeChild(child);
