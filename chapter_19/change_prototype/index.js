function constructor(name) {
  this.name = name;
  this.gender = "male";
}

const nick = new constructor("nick");
const james = new constructor("james");

console.log(nick.print === james.print); // true, prototype 의 function 이므로 같음
console.log(nick.genderChange === james.genderChange); // true, prototype 의 function 이므로 같음

console.log(nick.hasOwnProperty("__proto__")); //false, nick 이 아닌 Object 가 __proto__ 를 가지고 있어 접근 가능함
nick.__proto__.hello = () => console.log("hello"); // prototype 에 hello 추가
nick.hello(); // hello
// __proto__ 를 사용하는건 지양한다, setPrototypeOf 을 사용하는게 더 좋다.

const newParent = {
  number: 1,
};

console.log(Object.getPrototypeOf(nick)); // constructor
Object.setPrototypeOf(nick, newParent); // newParent 로 변경
console.log(Object.getPrototypeOf(nick)); // newParent

console.log(nick.number); // 출력 가능
