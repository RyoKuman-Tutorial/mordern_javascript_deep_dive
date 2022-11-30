const tempObj = {};
const tempFunc = function () {};
const tempArray = [];
const re = /ab+c/;

console.log(tempObj.__proto__ === Object.prototype); // true
console.log(tempFunc.__proto__ === Function.prototype); // true
console.log(tempArray.__proto__ === Array.prototype); // true
console.log(re.__proto__ === RegExp.prototype); // true
// 리터럴로 생성된 객체의 프로토타입은 정해져있다.
