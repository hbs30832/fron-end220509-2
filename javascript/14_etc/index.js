// 1. 삼항 연산자
// 조건 ? "true일 경우" : "false일 경우"
// 조건이 맞으면 ? 뒤의 값이, 틀리면 : 뒤의 값이 return;
let num = 2;
let type = num % 2 === 0 ? "짝수" : "홀수";

// 2. 단축 평가(논리 연산자 사용)
// && (and) : 앞의 조건이 true일 경우만 뒤에 코드를 실행.
// || (or) : 첫번째값이 fasly한 값이면 앞에 값을, truty한 값이면 뒤의 값을 return.

let result = true && console.log("트루입니다.");
let obj = {
  name: "seok",
};
let result2 = obj.name || "이름없음";
console.log(result2);

// 3. 비구조화 할당.
// const { 키값1, 키값2} = 객체 => 객체에 키값1과 키값2가 있다면 할당.
// 변수로 사용 가능.
// 배열도 사용 가능. => 순서로 구분.
const dog = {
  name: "coco",
  age: 3,
  bark: function () {
    console.log("멍멍!");
  },
};
const { name, age } = dog;
// const name = dog.name;
// const age = dog.age;
console.log(name);

let arr = ["seok", "coco"];
let [dogName, userName] = arr;
console.log(userName, dogName);

// 4. spread
// 배열 앞에 ...을 붙이면 값을 모두 나열. => ...[1,2,3,4] => 1,2,3,4
// Math.max()는 인자를 숫자를 여러개 받는다. => 배열을 받으면 NaN;
// Math.max(...arr) => Math.max(1,2,3,4)

let numArr = [1, 2, 3, 4];
let copy = [...numArr];
console.log(Math.max(...numArr)); // Math.max(1,2,3,4)

// 5. rest
// 매개변수를 몇개를 넣던 배열로 다 담아준다.
function getTotal(...num) {
  // 매개변수를 넣은만큼 num이라는 배열로 담아준다.
  // num은 배열이기 때문에 배열의 고차함수인 reduce를 활용.
  // ...num => spraed 문법을 통해서 다시 num을 나열할 수 있다.
  // rest는 매개변수의 마지막 순서로 와야한다.
  // rest 앞에 매개변수를 선언을 하면 그 개수만큼은 rest에 담기지 않는다.
  return num.reduce(function (acc, curr) {
    return acc + curr;
  }, 0);
}

console.log(getTotal(1, 2, 3, 4, 5, 6, 7));

// 6. Promise
// 비동기 처리 함수. => 비동기 코드를 동기처럼 처리 할 수 있다.
// 비동기 처리가 끝난 다음에 실행 결과에 따라 resolve(성공)와 reject(실패) 실행.
// resolve와 reject 첫번째 매개변수로 결과값을 담으면
// promise.then(결과값)으로 꺼내서 사용할 수 있다.
// catch 함수를 통해서 에러처리를 할 수 있다.

let promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(1);
  }, 1000);
});

// setTimemout => 비동기. => return이 먼저 실행돼서 원하는대로 안됨.
function getCats() {}
console.log(getCats());

// 비동기 처리가 끝난후에 then() 실행됨 => 비동기를 동기처럼 처리.

promise
  .then(function (res) {
    console.log(res);
    console.log(promise);
  })
  .catch((err) => {
    console.log(err);
  });

console.log(promise);

// async, await
// async : 비동기처리 하고 싶은 함수 앞에 붙는 키워드.
// 함수내의 return 값을 promise에 result값으로 담아서 promise를 리턴.
// await : 비동기처리를 기다려준다.

let example = new Promise((resolve) => {
  setTimeout(() => {
    resolve(3);
  }, 2000);
});
async function getInfo() {
  console.time("소요시간");
  // let [result01, result02] = await Promise.all([promise, example]);
  let result01 = await promise;
  let result02 = await result01;
  console.log(result01, result02);
  console.timeEnd("소요시간");
}

// getInfo();
// getInfo();

let userList = [
  { id: 1, name: "seok" },
  { id: 2, name: "jc" },
  { id: 3, name: "kh" },
];

let movieList = [
  { id: 1, name: "iron man" },
  { id: 2, name: "범죄도시2" },
  { id: 3, name: "백두산" },
];

// getMoive와 getMovie가 병렬적으로 처리되어도 상관이 없다.
// => promise.all()을 활용하면 병렬적으로 처리되기 때문에 시간 단축.
function getMovie(id) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      const [movie] = movieList.filter((movie) => movie.id === id);
      resolve(movie);
    }, 1000);
  });
}

function getMovieList() {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve(movieList);
    }, 2000);
  });
}

async function fetchData() {
  console.time("영화검색");
  // const movie = await getMovie(2);
  // const movieList = await getMovieList();
  const [movie, movieList] = await Promise.all([getMovie(1), getMovieList()]);
  // const first = await Promise.race([getMovie(1), getMovieList()]);

  console.timeEnd("영화검색");
  return [movie, movieList];
}

console.log(fetchData());

// getId에서 받아온 id getDetail이 사용하기 때문에 병렬적으로 처리하면 안된다.
// => async await을 사용하면 된다. => 비동기를 동기처리한다.
function getId(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      let result = userList.filter((user) => user.name === name)[0].id;
      resolve(result);
    }, 1000);
  });
}

function getDetail(id) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      let result = userList.filter((user) => user.id === id);
      resolve(result);
    }, 1000);
  });
}

async function getUserInfo(name) {
  console.time("유저 정보 조회중");
  let id = await getId(name);
  let detail = await getDetail(id);
  console.timeEnd("유저 정보 조회중");
  return detail;
}

getUserInfo("seok");

// getUserInfo("seok").then((res) => {
//   console.log(res);
// });

// let songList = [
//   {
//     id: 1,
//     title: "달라달라",
//   },
//   {
//     id: 2,
//     title: "휘파람",
//   },
//   {
//     id: 3,
//     title: "Loco",
//   },
// ];

// function getSong(title) {
//   return new Promise(function (resolve) {
//     setTimeout(function () {
//       let [result] = songList.filter((song) => {
//         return song.title === title;
//       });
//       resolve(result.id);
//     }, 1000);
//   });
// }

// function getSongDetail(id) {
//   return new Promise(function (resolve) {
//     setTimeout(function () {
//       let [result] = songList.filter((song) => song.id === id);
//       resolve(result);
//     });
//   }, 2000);
// }

// getSong("휘파람").then(function (res) {
//   getSongDetail(res).then(function (res) {
//     console.log(res);
//   });
// });

// async function getData(title) {
//   // let id = await getSong(title);
//   // let detail = await getSongDetail(id);
//   return detail;
// }

// getData("Loco");

// 응용
let songList = [
  {
    id: 1,
    title: "달라달라",
  },
  {
    id: 2,
    title: "휘파람",
  },
  {
    id: 3,
    title: "Loco",
  },
];

function getSong(title) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      // 필터링 된 값을 result에 배열로 담아줌
      let [result] = songList.filter((song) => {
        return song.title === title;
      });
      resolve(result.id);
    }, 1000);
  });
}

//getSong을 하는 순간 얘가 Promise가 되는 것
getSong("달라달라").then((res) => console.log(res));
// 얘를 연결해서 밑에것도 Promise로 만들어야 함

function getSongDetail(id) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      // 화살표 함수는 코드블럭을 생략하면 바로 값을 return한다
      let [result] = songList.filter((song) => song.id === id);
      resolve(result);
    });
  }, 2000);
}

getSong("달라달라").then(function (res) {
  console.log(res);
});

//getSong
getSong("달라달라").then(function (res) {
  getSongDetail(res).then(function (res) {
    console.log(res);
  });
});

async function getData(title) {
  let id = await getSong(title);
  let detail = await getSongDetail(id);
  return detail;
}

getData("Loco").then((res) => {
  console.log("결과 : " + res.title);
});

let getDrama = () => {
  let drama;
  setTimeout(function () {
    drama = "그 해 우리는";
  }, 1000);
  return drama;
};
let newPromise = () => {
  let drama = getDrama();
  return drama;
};

console.log(newPromise());

// 데이터 받아오는 함수. 1초 => .then으로 출력

let getProduct = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ title: "iphone", version: 12 });
  }, 1000);
});

let resultElem = document.querySelector(".result");
getProduct.then((res) => {
  resultElem.innerHTML = `<p> 제품명 : ${res.title + res.version}</p>`;
});
