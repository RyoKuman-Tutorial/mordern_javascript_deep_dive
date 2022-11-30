function foo() {}
const bar = function () {};
const baz = {
  x: function () {},
};

const a = new foo();
const b = new bar();
const c = new baz.x();

console.log(a, b, c); // 전부 생성자로 사용 가능

const arrow = () => {};

const obj = {
  b: function () {}, // 일반함수, 메서드가 아님
  x() {}, // 메서드
};

// new arrow(); 에러 발생 constructor 가 아닙니다.
// new obj.x(); 에러 발생 constructor 가 아닙니다.
// arrow function 과 method 는 일반함수가 아니므로 생성자가 될 수 없다.

function Constructor(name) {
  if (!new.target) {
    return new Constructor(name);
  }
  this.name = "name";
}

const test = Constructor("name");
console.log(test);

// new.target 을 이용하면 new 없이도 객체를 생성 가능하다.
