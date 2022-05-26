// dom 접근 => $("선택자")
console.log($(".box")); // => 클래스가 box인 요소들을 담는다.
$(".container").children().css("border", "3px solid #fff");
console.log($(".box").parent().css("background-color", "#eee"));

// 스타일 변경
// $(".box").css("background-color", "black");
// 인라인 속성으로 스타일변경 지양하는게 좋다.

// 속성 변경
$("a").attr("href", "https://www.google.com");

// 이벤트리스너
$(".box").click(function () {
  // this에 jquery api를 적용하려면 $()로 감싸야한다.
  console.log(this);
  $(this).toggleClass("blue"); // 클래스명을
  //   $(this).fadeOut();
});

$(".container").append(`<div class="box"></div>`); // 문자열 형태로 요소를 추가.
// $(".container").empty(); // 자식요소를 다 삭제.
$(".box").eq(3).addClass("blue"); // eq() : nth-child()와 같다. 인덱스 0 부터 시작.
$(".box").siblings().eq(1).addClass("blue"); // silbilngs() : 형제 요소(모두)를 선택. 자신 포함.
console.log($(".box").eq(2).prev().css("border-color", "black")); // prev() : 이전 형제 요소 선택.

let arr = [
  { id: 1, text: "JavaScript" },
  { id: 1, text: "Jquery" },
  { id: 1, text: "React" },
];

arr.forEach(function (item) {
  $("body").append(`<div class="todo">${item.text}</div>`);
});

$(".todo").click(function () {
  $(this).toggleClass("active");
});

// 리스트 만들어서 각 아이템 클릭시 해당 아이템 글씨 색상변경

// Jquery 의사 코드??
function customJquery(selector) {
  return {
    nodeList: document.querySelectorAll(selector),
    css: function (property, value) {
      this.nodeList.forEach((item) => {
        item.style[property] = value;
      });
    },
    click: function (func) {
      this.nodeList.forEach((item) => [
        item.addEventListener("click", function () {
          func();
        }),
      ]);
    },
  };
}

let $$ = customJquery;

$$(".box").css("backgroundColor", "tomato");

$$(".container").css("border", "10px solid red");

// 카드 4 * 3 12장 화면에 출력.
// 처음에는 뒷면 보여주다가 클릭시 앞면
// perspective + rotate => 3d 회전. or display: none;
// 앞면 뒷면 order 속성 => 화면에 쌓이는 순서. 포토샵 레이어

{
  /* 
<div class="container"> => perspective
  <div 얘 클릭하면> => 얘가 회전
    <앞면></앞면> 얘 보이고
    <뒷면></뒷면> 얘 안보이고
    </div> 
</div>
*/
}
