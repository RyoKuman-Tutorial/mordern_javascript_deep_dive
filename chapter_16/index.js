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
