Array.prototype.customFilter = function (func) {
  let resultArr = [];
  for (let i = 0; i < this.length; i++) {
    if (func(this[i])) resultArr.push(this[i]);
  }
  return resultArr;
};

console.log(Object.getPrototypeOf(player01));

class Character {
  constructor(id, job, level, hp, mp, damage) {
    this.id = id;
    this.job = job;
    this.level = level;
    this.hp = hp;
    this.mp = mp;
    this.damage = damage;
    this.dom = document.querySelector(`.player0${id} .hpText`);
  }

  attack(target) {
    if (this === target) {
      alert("자신을 공격할 수 없습니다.");
      return;
    }
    target.hp -= this.damage;
    const hpText = document.createTextNode(target.hp);
    target.dom.appendChild(hpText);
  }
  static sayHello() {
    console.log("Hello!");
  }
}

let player03 = new Character(3, "전사", 10, 1000, 200, 50);
let player04 = new Character(4, "마법사", 8, 500, 800, 100);

player03.attack(player04);
player04.attack(player03);

const player03Elem = document.querySelector(".player03");
const player04Elem = document.querySelector(".player04");

Character.sayHello();

function render() {}

let playerList = document.querySelectorAll(".player");
let playerCollection = document.getElementsByClassName("player");

console.log(playerList);
console.log(Object.getOwnPropertyDescriptors(playerList));
console.log(Object.getOwnPropertyDescriptors(playerCollection));

console.log(arr);
