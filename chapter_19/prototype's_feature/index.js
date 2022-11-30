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
