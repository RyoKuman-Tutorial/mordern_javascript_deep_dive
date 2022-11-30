/* -------------------------------------------- change prototype by constructor -------------------------------------------- */

const Animal1 = (function () {
  function Animal1(name) {
    this.name = name;
  }

  Animal1.prototype = {
    sayHello() {
      console.log(`Hi I am ${this.name}`);
    },
  }; // 프로토타입을 아예 바꿔버리는 식, 이러면 생성자와 프로퍼티 간의 연결이 끊긴다.

  return Animal1;
})();

const dolphin = new Animal1("dolphin");
dolphin.sayHello();
console.log(Object.getPrototypeOf(dolphin).constructor); // 생성자가 Object 로 뜸

const Animal2 = (function () {
  function Animal2(name) {
    this.name = name;
  }

  Animal2.prototype = {
    constructor: Animal2,
    sayHello() {
      console.log(`Hi I am ${this.name}`);
    },
  }; // constructor 를 선언해줌으로써 프로퍼티와 생성자 간의 연결을 유지

  return Animal2;
})();

const shark = new Animal2("shark");
shark.sayHello();
console.log(Object.getPrototypeOf(shark).constructor); // 생성자가 Animal2 로 뜸

/* -------------------------------------------- change prototype by instance -------------------------------------------- */

function Planet1(name) {
  this.name = name;
}

const jupiter = new Planet1("jupiter");

const NewPlanet1 = {
  sayHello() {
    console.log(`this planet's name is ${this.name}`);
  },
};

Object.setPrototypeOf(jupiter, NewPlanet1); // prototype을 교체
jupiter.sayHello();
console.log(Object.getPrototypeOf(jupiter).constructor); // 생성자가 Object 임을 확인 가능

function Planet2(name) {
  this.name = name;
}

const pluto = new Planet2("pluto");

const NewPlanet2 = {
  constructor: Planet2,
  sayHello() {
    console.log(`this planet's name is ${this.name}`);
  },
};

Object.setPrototypeOf(pluto, NewPlanet2); // prototype을 교체
pluto.sayHello();
console.log(Object.getPrototypeOf(pluto).constructor); // 생성자가 NewPlanet2 임을 확인 가능
