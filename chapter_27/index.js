const arr1 = [1, 2, 3];
const arr2 = new Array(1, 2, 3);

console.log(arr1.__proto__.constructor); // Array
console.log(arr1.__proto__.__proto__.constructor); // Object
// Array 는 변형된 Object

console.log(arr1);
arr1.length = 10;
console.log(arr1, arr1[5]); // 배열의 길이는 달라지나, 빈 공간에는 undefined 값이 추가된다.

const arr3 = [, 1, , 3]; // 값의 중간을 비워서 array 생성 가능
console.log(arr3);
// 값의 중간이 비어있는 배열을 희소 배열이라고 한다.

const arr4 = new Array(); // length = 0, 요소가 없으면 아무 요소도 갖지 않는 배열 생성
const arr5 = new Array(10); // length = 10, 요소가 1개이며 숫자면 해당 숫자를 length 값으로 갖는 배열 생성
const arr6 = new Array({}); // length = 1, 요소가 1개이지만, 숫자가 아닌 경우, 해당 요소를 갖는 배열 생성
console.log(arr4, arr5, arr6);
