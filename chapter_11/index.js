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

obj3 = { ...obj1 }; // object 복제
obj1.age = 15;

console.log(obj1);
console.log(obj3); // obj1 만 age 가 변경되었음을 확인 할 수 있다.

var obj4 = {
  name: "shallow",
  obj: { x: 1 },
};

var obj5 = { ...obj4 }; // obj4 를 복사하여 obj5 를 복사

obj4.obj.x = 10; // obj4 의 프로퍼티인 obj의 프로퍼티, x 를 변경

console.log(obj4);
console.log(obj5); // 둘 다 , obj.x 가 변경됨을 확인 할 수 있다.
// {...obj} 만으론 모든 것을 복제하는것이 불가능하다.
// 이처럼 한단계 까지만 복사하는것을 얕은 복사, ( shallow copy )
// 객체에 중첩되어있는 객체까지 모두 복사하는것을 깊은 복사라고 한다. ( deep copy )
// deep copy 는 lodash 를 이용하여 가능하다.
