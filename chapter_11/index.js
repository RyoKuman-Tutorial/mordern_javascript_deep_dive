var var1 = 10; // 10이 저장된 메모리의 주솟값을 var1 에 저장함,
var var2 = var1; // var1의 값을 var2 에 저장함, var1 은 10이 저장된 메모리의 주솟값을 가지고 있으므로, var2 는 10이 저장된 메모리의 주솟값을 저장

console.log(var1); // 10
console.log(var2); // 10

var2 = 20; // 10이 저장된 메모리의 주솟값을 var2 에 저장함,

var obj1 = {
  name: "kim",
  func() {
    console.log("hello");
  },
}; // { name : ... , func:... } 가 저장되어있는 주솟값을 obj1에 저장함

var obj2 = obj1; // obj2 에 obj1 의 주솟값을 그대로 전달

obj1.age = 10; // obj1 에 저장된 주솟값에 해당하는, 객체에 age 를 추가

console.log(obj1);
console.log(obj2); // obj1, obj2 둘 다 age 가 추가되었음을 확인 할 수 있다.

obj3 = { ...obj1 }; // 올바른 object 복제 방법,
obj1.age = 15;

console.log(obj1);
console.log(obj3); // obj1 만 age 가 변경되었음을 확인 할 수 있다.
