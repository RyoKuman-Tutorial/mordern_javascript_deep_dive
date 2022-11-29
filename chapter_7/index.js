var str = "10"; // string
var bool = "true"; // boolean

console.log(typeof +str); // number
console.log(typeof +bool); // number

console.log(typeof (1 + +"2")); // number
console.log(typeof (1 + "2")); // string

console.log("5" == 5); //true
console.log(0 == "0"); //true
console.log(0 == ""); //true
console.log("0" == ""); //false

// == 연산자의 결과는 상황에 따라 외우는 것이 더 좋다.

console.log("5" === 5); //true
console.log(0 === "0"); //true
console.log(0 === ""); //true
console.log("0" === ""); //false

// 사실 덮어두고 === 연산자를 사용하는것이 훨씬 좋다.

var NaN1 = NaN;
var NaN2 = NaN;
console.log(NaN1 === NaN2); // false
console.log(isNaN(NaN1)); // NaN을 확인할 수 있는 유일한 방법은 NaN 뿐이다.
