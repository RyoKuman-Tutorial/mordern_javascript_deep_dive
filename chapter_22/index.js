// 객체 리터럴
const circle = {
  radius: 5,
  getDiameter() {
    return 2 * this.radius; // 객체 리터럴에서 this 는 호출한 객체를 가리킨다.
  },
};

console.log(circle.getDiameter());

// 생성자
const Obj = (function () {
  function Obj(name) {
    this.name = name;
  }

  Obj.prototype.getThis = function () {
    return this; // 생성자 내부의 this 는 생성자가 '생성할' 객체를 가르킨다.
  };

  return Obj;
})();

const obj1 = new Obj("obj1");
const obj2 = new Obj("obj2");

console.log(obj1.getThis());
console.log(obj2.getThis()); // 메서드 내부의 this 는 해당 메서드를 호출한 객체를 뜻한다.

console.log(this); // window, 전역에서 this는 window 를 가르킨다.

function tempFunc() {
  console.log(this); // 일반함수 내부에서의 this 는 window 를 가르킨다.
}
tempFunc(); // window
