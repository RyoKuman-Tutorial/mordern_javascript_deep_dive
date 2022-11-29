var element1 = "test";
var element2 = null;

console.log(element1 && element1.value);
console.log(element2 && element2.value);
// alpha && alpha.value 에서 alpha 가 null 이라면, null 값이 반환되며, 아니라면 alpha 값이 반환된다.
// alpha 가 null 인 상태에서 alpha.value 시에 error
// 사실 존재 이유를 잘 모르겠다.
