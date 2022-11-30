function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log(`Hi My name is ${this.name}`); // 프로토타입 매서드
};

Person.staticProp = "staticProp"; // 정적 프로퍼티
Person.staticMethod = function () {
  console.log("staticMethod");
};

const me = new Person("Lee");

Person.staticMethod();
console.log(me.staticMethod); // undefined
// 정적 프로퍼티, 메소드는 인스턴스로 참조 불가능
