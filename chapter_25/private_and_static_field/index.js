class Person {
  #name = ""; // private 필드, 클래스 내부에서만 접근이 가능하다.
  static staticPublicProp = "staticPublic"; // static public 필드
  static #staticPrivateProp = "staticPrivate"; // static private 필드

  constructor(name) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }
}

const me = new Person("LEE");
console.log(me.getName()); // 간접적으로 private 필드인 name 에 접근 가능
console.log(Person.staticPublicProp); // static public 필드에 접근
// console.log(Person.#staticPrivateProp); 에러 발생
// console.log(me.#name); 에러 발생,
