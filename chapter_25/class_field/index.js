class Person {
  name; // 클래스 필드 name
  getName = function () {
    // 클래스 필드 메소드 getName
    return this.name;
  };

  constructor(name) {
    this.name = name;
  }
}

const me = new Person("Lee");
console.log(me);
console.log(me.getName());
// 클래스 필드에 메소드를 할당하는건 지양하는것이 좋다.
// 클래스 필드에 할당된 메소드는, 인스턴스 프로퍼티가 되기 때문이다.
