const person = {
  firstName: "Ungmo", // 데이터 프로퍼티
  lastName: "Lee", // 데이터 프로퍼티
  get fullName() {
    // 접근자 프로퍼티의 getter;
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(name) {
    // 접근자 프로퍼티의 setter;
    [this.firstName, this.lastName] = name.split(" ");
  },
};

console.log(person.firstName + " " + person.lastName);
person.fullName = "Heungmin Son";
console.log(person.fullName);
console.log(person.firstName + " " + person.lastName);

console.log(Object.getOwnPropertyDescriptor(person, "firstName")); // value writable
console.log(Object.getOwnPropertyDescriptor(person, "fullName")); // get set
// 프로퍼티 디스크립터를 통해 해당 프로퍼티의 종류를 판별 가능

const dummy = {};
Object.defineProperty(dummy, "fullName", {
  value: "heungmin",
  writable: true,
  enumerable: true,
  configurable: true,
});
console.log(Object.getOwnPropertyDescriptor(dummy, "fullName")); // data property

Object.defineProperty(dummy, "lastName", {
  value: "Son",
  // writable, enumerable, configurable
  // 위 세 가지 요소의 기본값은 false 이다.
});

person.lastName = "LEE"; // writable 이 false 이므로 무시된다.
delete person.lastName; // configurable 이 false 이므로  무시된다.

Object.defineProperty(dummy, "fullName", {
  get: function () {
    return this.lastName;
  },
  set: function (name) {
    this.lastName = name;
  },
  enumerable: true,
  configurable: true,
});

console.log(Object.getOwnPropertyDescriptor(dummy, "fullName")); // accesor property 로 전환, value , writable 삭제됨을 확인할 수 있다.
