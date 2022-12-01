class Person {
  #name = ""; // private 필드, 클래스 내부에서만 접근이 가능하다.
  constructor(name) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }
}

const me = new Person("LEE");
console.log(me.getName()); // 간접적으로 private 필드인 name 에 접근 가능
// console.log(me.#name); 에러 발생,
