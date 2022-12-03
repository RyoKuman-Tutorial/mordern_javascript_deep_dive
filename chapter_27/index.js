const arr1 = [1, 2, 3];
const arr2 = new Array(1, 2, 3);
// 배열 생성법

console.log(arr1.__proto__.constructor); // Array
console.log(arr1.__proto__.__proto__.constructor); // Object
// Array 는 변형된 Object
