const strObj = new String("Lee");
console.log(Object.getPrototypeOf(strObj).constructor); // 빌트인 객체인 String.prototype 을 prototype 으로 가짐

const str = "hello";
console.log(Object.getPrototypeOf(str).constructor); // 빌트인 객체인 String.prototype 을 prototype 으로 가짐

// 원시 값은 객체가 아니지만, 객체처럼 접근할 시에, 임시 객체가 생성되는데 이를 래퍼(wrapper) 객체라고 한다.

str.name = "hello";
console.log(str.name); // undefined
// 원시 값에 객체처럼 한 접근이 끝나면, 해당 값은 임시 객체에서 원시값으로 다시 돌아간다.

console.log(globalThis); // 전역 객체, v8 의 경우 window , node js 의 경우 global
console.log(window.Infinity === Infinity); // true, 전역 객체의 프로퍼티를 참조할때, 전역 객체를 생략할 수 있다.

var sampleProp = "hello";
console.log(window.sampleProp); // hello
console.log(window.sampleProp === sampleProp); // true, 암묵적,전역 변수들은 window의 프로퍼티가 된다.

function smapleFunc() {
  console.log("hello");
}
window.smapleFunc(); // hello
console.log(window.smapleFunc === smapleFunc); // true, 일반함수는 window 의 메서드가 된다.
