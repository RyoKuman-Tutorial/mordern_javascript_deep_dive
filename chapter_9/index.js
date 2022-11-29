var element1 = "test";
var element2 = null;

console.log(element1 && element1.value);
console.log(element2 && element2.value);
// alpha && alpha.value 에서 alpha 가 null 이라면, null 값이 반환되며, 아니라면 alpha 값이 반환된다.
// alpha 가 null 인 상태에서 alpha.value 시에 error
// 사실 존재 이유를 잘 모르겠다.

var elem = null;
console.log(elem?.value);
// ? 의 좌항 피연산자가 falsy 값 이라면, value가 아닌 falsy 값을 그대로 반환한다,

var obj;
var obj1 = null;
var obj2 = { value: "hello" };
var obj3 = {};

console.log(obj?.value); // obj은 falsy 값이므로, undefined가 그대로 return
console.log(obj1?.value); // obj1은 falsy 값이므로,  undefined가 그대로 return
console.log(obj2?.value); // obj2는 falsy 값이 아니므로, obj2 의 value 값인 hello 를 return
console.log(obj3?.value); // obj3는 falsy 값이 아니므로, obj3 의 value 값인 undefined 를 return

console.log(null ?? "hello1"); // 좌항이 null 이므로 hello1를 return
console.log(undefined ?? "hello2"); // 좌항이 undeifned 이므로 hello1를 return
console.log("" ?? "hello3"); // 좌항이 falsy 이지만, null 과 undefined 가 아니므로 "" 를 return
console.log(NaN ?? "hello3"); // 좌항이 falsy 이지만, null 과 undefined 가 아니므로 NaN 를 return
