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

// class는 prototype의 문법적 설탕.
class Human {
  constructor(name, age) {
    //  값 초기화
    this.name = name;
    this.age = age;
  }
  // static => 인스턴스가 아닌 클래스에선 사용 가능.
  static hello() {
    console.log("정적 메서드입니다.");
  }
  static country = "korea";

  // 클래스에서는 함수 키워드 사용 x.
  // 인스턴스가 사용할 함수.
  greeting() {
    console.log(`${this.name}입니다.`);
  }
}

class Korea extends Human {
  constructor() {
    super();
  }
}

// 리액트 => 함수형 컴포넌트, 클래스형 컴포넌트.

const human = new Human("seok", 30);
Human.hello();
console.log(Human.count);
human.greeting();
