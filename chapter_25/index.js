class SampleClass1 {} // 선언문
const SampleClass2 = class {}; // 표현식
const SampleClass3 = class MyClass {}; // 기명 클래스 표현식
// 클래스를 선언하는 방식들

class Person {
  constructor(name) {
    // 해당 클래스의 생성자
    this.name = name; // 프로퍼티
    Person.staticProps = "static"; // 정적 프로퍼티
  }

  sayHi() {
    // 프로토타입 매서드
    console.log("Hi! My Name is " + this.name);
  }

  static sayHello() {
    // 정적 메소드
    console.log("Hello!");
  }
}

const me = new Person("Lee");
console.log(me.name);
me.sayHi();
Person.sayHello();
