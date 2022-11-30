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
console.log(nick.genderChange === james.genderChange); //, true prototype 의 function 이므로 같음

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
console.log(person.hasOwnProperty("prototype")); // true , 함수만 prototype 을 가지고 있다.

// 함수에서의 prototype은 constructor 로써 새로 생성할 객체의 프로토타입을 의미한다.
console.log(me.__proto__ === person.prototype); // constructor 와, 객체의 __proto__ 는 같은 대상을 가르키고 있다.

console.log((() => {}).hasOwnProperty("prototype")); // false , non-structor 인 arrow function 은 prototype 이 없다.
const obj = {
  x() {},
};
console.log(obj.x.hasOwnProperty("prototype")); // false ,  메소드 또한, prototype을 가질 수 없다.

console.log(me.__proto__.constructor === person); // true, prototype이 갖는 constructor 는 자신의 생성자를 뜻한다. ( 자신을 prototype 으로 갖는 constructor )
