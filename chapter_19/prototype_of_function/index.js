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
