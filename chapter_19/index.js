/* -------------------------------------------- 프로토타입을 이용한 공용 함수 생성 -------------------------------------------- */

function constructor(name) {
  this.name = name;
  this.gender = "male";
}

constructor.prototype.print = function () {
  console.log("name is : " + this.name);
  console.log("gender is : " + this.gender);
};

constructor.prototype.genderChange = function () {
  if (this.gender === "male") this.gender = "female";
  else if (this.gender === "female") this.gender = "male";
};

const nick = new constructor("nick");
const james = new constructor("james");

nick.genderChange();
nick.print();
james.print();

/* -------------------------------------------- 프로토타입을 바꾸는 여러가지 방법들 -------------------------------------------- */

console.log(nick.print === james.print); // true, prototype 의 function 이므로 같음
console.log(nick.genderChange === james.genderChange); // true, prototype 의 function 이므로 같음

console.log(nick.hasOwnProperty("__proto__")); //false, nick 이 아닌 Object 가 __proto__ 를 가지고 있어 접근 가능함
nick.__proto__.hello = () => console.log("hello"); // prototype 에 hello 추가
nick.hello(); // hello
// __proto__ 를 사용하는건 지양한다, setPrototypeOf 을 사용하는게 더 좋다.

const newParent = {
  number: 1,
};

console.log(Object.getPrototypeOf(nick)); // constructor
Object.setPrototypeOf(nick, newParent); // newParent 로 변경
console.log(Object.getPrototypeOf(nick)); // newParent

console.log(nick.number); // 출력 가능

/* -------------------------------------------- function 의 prototype -------------------------------------------- */

const person = function () {
  this.name = name;
};

const me = new person("me");
console.log(me.hasOwnProperty("prototype")); // false
console.log(person.hasOwnProperty("prototype")); // true, 함수만 prototype 을 가지고 있다.

// 함수에서의 prototype은 constructor 로써 새로 생성할 객체의 프로토타입을 의미한다.
console.log(me.__proto__ === person.prototype); // constructor 와, 객체의 __proto__ 는 같은 대상을 가르키고 있다.

console.log((() => {}).hasOwnProperty("prototype")); // false, non-structor 인 arrow function 은 prototype 이 없다.
const obj = {
  x() {},
};
console.log(obj.x.hasOwnProperty("prototype")); // false,  메소드 또한, prototype을 가질 수 없다.

console.log(me.__proto__.constructor === person); // true, prototype이 갖는 constructor 는 자신의 생성자를 뜻한다. ( 자신을 prototype 으로 갖는 constructor )

/* -------------------------------------------- literal's prototype -------------------------------------------- */

const tempObj = {};
const tempFunc = function () {};
const tempArray = [];
const re = /ab+c/;

console.log(tempObj.__proto__ === Object.prototype); // true
console.log(tempFunc.__proto__ === Function.prototype); // true
console.log(tempArray.__proto__ === Array.prototype); // true
console.log(re.__proto__ === RegExp.prototype); // true
// 리터럴로 생성된 객체의 프로토타입은 정해져있다.

/* -------------------------------------------- prototype's feature -------------------------------------------- */

console.log(test.prototype.constructor === test); // true
function test() {} // function prototype 은 런타임 이전에 생성된다.

function Test(name) {
  this.name = name;
}

const temp = new Test("hello");

const tempPrototype = Object.getPrototypeOf(temp);
const tempPrototypePrototype = Object.getPrototypeOf(tempPrototype);

console.log(tempPrototype === Test.prototype); // true
console.log(tempPrototypePrototype === Object.prototype); // true
// temp => Test.prototype => Object.prototype, 으로 체이닝되어있다.

const Person = (function () {
  function Person(name) {
    this.name = name;
  }

  Person.prototype.sayHello = function () {
    console.log(`Hi! My name is ${this.name}`);
  };

  return Person;
})(); // 생성자 함수

const my1 = new Person("LEE");
const my2 = new Person("KIM");

my1.sayHello();
my2.sayHello(); // 잘 작동함

my1.sayHello = function () {
  console.log(`COOOOL! My name is ${this.name}`);
};

my1.sayHello(); // 섀도잉으로 인해 COOOOL 이 출력

delete my1.sayHello;

my1.sayHello(); // 원래대로 hi 출력

Person.prototype.sayHello = function () {
  console.log(`Hello! My name is ${this.name}`); // 오버라이딩
};

my1.sayHello();
my2.sayHello(); // 잘 작동함

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

/* -------------------------------------------- instanceof -------------------------------------------- */

function Coffee(name) {
  this.name = name;
}

const latte = new Coffee("latte");

console.log(latte instanceof Coffee); // true, 프로토타입 체인 상에 Coffee 가 존재하므로
console.log(latte instanceof Object); // true, 프로토타입 체인 상에 Object 가 존재하므로
