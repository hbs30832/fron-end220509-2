let obj = {
  name: "hwangbo seok",
};
console.log(obj.name);

// 1. DOM (Document Object Model)
// 웹 요소에 대한 속성, 값, 함수 등을 담고 있는 객체.

// 2. 브라우저 관련 객체
// location, history, screen 등 브라우저에 관련된 속성, 값, 함수 등을 담고 있는 객체

// 3. JavaScript 내장 객체
// Math, Date, Array 등 JS가 내장하고 있는 객체.

// new
// 생성자 함수 => 틀.
// instance => 객체에 속성이나 함수 등을 미리 만들어 놓고 그 형태에 맞게 찍어내는 복제품.
// new 객체이름()의 형태로 작성 => 객체의 틀에 맞게 인스턴스가 반환.

let obj02 = {
  month: 5,
  date: 20,
  getDate: function () {
    return 20;
  },
};

console.log(obj02.getDate());
// let dateObj = new Date(); => return 인스턴스
let dateObj02 = new Date();
// console.log(dateObj);
console.log(dateObj02.getDate());
console.log(Math.floor(1.1));

function Player(name, age) {
  this.name = name;
  this.age = age;

  this.hello = function () {
    console.log("hello my name is " + this.name);
  };
  Player.sayHi = function () {
    console.log("hi");
  };
}

let player01 = new Player("seok", 30);
let player02 = new Player("hwangbo", 20);

Player.prototype.sayBye = function () {
  console.log("Bye");
};
Player.sayHi();
player01.sayBye();

console.log(player01.name);
console.log(player02.name);
console.log(typeof player01);
player01.hello();
player02.hello();

let arr = [1, 2, 3, 4, 5, 6];
