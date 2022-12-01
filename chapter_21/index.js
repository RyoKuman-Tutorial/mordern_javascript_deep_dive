const strObj = new String("Lee");
console.log(Object.getPrototypeOf(strObj).constructor); // 빌트인 객체인 String.prototype 을 prototype 으로 가짐

const str = "hello";
console.log(Object.getPrototypeOf(str).constructor); // 빌트인 객체인 String.prototype 을 prototype 으로 가짐

// 원시 값은 객체가 아니지만, 객체처럼 접근할 시에, 임시 객체가 생성되는데 이를 래퍼(wrapper) 객체라고 한다.

str.name = "hello";
console.log(str.name); // undefined
// 원시 값에 객체처럼 한 접근이 끝나면, 해당 값은 임시 객체에서 원시값으로 다시 돌아간다.
