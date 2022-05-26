// 생성자 함수
// 생성자 미리 설계도를 만들어놓고 그 설계도에 맞는 실체(인스턴스) 만들언낸다.
// 인스턴스는 실제로 메모리를 차지함.
// 인스턴스를 생성할 때는 new 키워드와 함께 생성자 함수를 호출.

const date = new Date();
const arr = new Array(10);
const str = new String("seok");

// const arr01 = []; 리터럴 표기법을 이용한 인스턴스 생성.
// 인스턴스에서 실행하는 함수와 생성자 함수를 직접 실행 함수와 속성이 있다.
console.log(Date.now()); // 생성자 함수가 직접 호출하는 함수.
console.log(date.getDate()); // 인스턴스가 호출함는 함수.
let arr2 = [2, 1, 34];
const obj = {
  id: 2,
  name: "seok",
  run: function () {
    console.log("달린다.");
  },
};

function User(name, age) {
  this.name = name;
  this.age = age;
  this.hello = function () {
    console.log(`저는 ${this.age} 살입니다.`);
  };
}

// 생성자함수가 직접 호출. => ex) Math.floor(), Date.now()
// 정적 메서드, 정적 프로퍼티. => 생성자 함수를 통해서 접근.
User.run = function () {
  console.log("달리기!!");
};
User.type = "human";
// 인스턴스가 호출. => 인스턴스의 고유한 정보를 참조할 때 사용.
// => arr.map(), arr.filter();

User.prototype.greeting = function () {
  console.log(`안녕하세요 저는 ${this.name}입니다.`);
};

const user = new User("coco", 20);
const user02 = new User("seok", 30);

User.run();
user.greeting();

// console.log(this);

let obj03 = {
  name: "seok",
  introduce: () => {
    console.log(this.name);
  },
};

console.log(window.name);

obj03.introduce();

// 리액트 => 함수형 컴포넌트, 클래스형 컴포넌트

function Rect(width, height) {
  this.width = width;
  this.height = height;
}

// prototype에 함수를 추가하면 앞으로 생성될 인스턴스가 사용.
// => 생성자 함수가 실행 x.
Rect.prototype.getArea = function () {
  return this.width * this.height;
};

// Rect.getArea();

const rect = new Rect(10, 10);
console.log(rect.getArea());

// class는 prototype의 문법적 설탕. => 생성자 함수와 마찬가지로 인스턴스를 만드는 설계도.
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  // 인스턴스가 사용할 함수. => 일반적인 함수와 function 키워드를 사용하지 않는다.
  // 이렇게 함수를 작성하면 prototype에 추가.
  getArea() {
    return this.width * this.height;
  }

  // static : 클래스에서 직접 사용하는 메서드(함수)와 프로퍼티(값). => 인스턴스에서 사용 불가.
  static type = "사각형";
  static getType() {
    console.log("사각형입니다.");
  }
}

console.log(Rectangle.type);

const rectByClass = new Rectangle(20, 20);
console.log(rectByClass);
Rectangle.getType();

// 클래스 상속
class Animal {
  constructor(legs, speed) {
    this.legs = legs;
    this.speed = speed;
  }

  move() {
    console.log(`${this.speed}km/h로 움직입니다.`);
  }
}

// Dog클래스가 Aniaml 클래스를 상속 받음. => extends 상속받을 클래스명.
class Dog extends Animal {
  // constructor를 생략하면 상위 클래스의 constructor를 실행.
  // 프로퍼티를 추가하고 싶으면 constructor 내부에서 super() 실행.
  // => constructor에 기존 상위 클래스의 인자 + 서브클래스만의 인자를 받아야한다.
  // => super(기존프로퍼티) + this.새로운프로퍼티 = 서브클래스만의 인자.
  constructor(legs, speed, age) {
    // super : 상위 클래스의 constructor를 실행.
    // super가 먼저 실행되어야한다.
    super(legs, speed);
    this.age = age;
  }
  bark() {
    console.log("월!월!월!");
  }
  // 오버라이딩 => 기존의 메서드명과 같은 메서드를 작성을 하면 덮어씌워진다.
  // => Animal클래스의 move()를 덮어씌움.
  move() {
    console.log("어떻게 될까요?");
  }
}

// class Human extends Animal {
//   constructor;
// }

const animal = new Animal(2, 10);
const dog = new Dog(4, 10, 2);
console.log(dog);
dog.move();
dog.bark();
