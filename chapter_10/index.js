var a = 1;
var b = 2;
var obj = { a, b }; // { a:a, b:b } 와 동일하다.

console.log(obj.a); // 1
console.log(obj.b); // 2

var name = "props";
var num = 1;
var obj1 = {
  [`${name}-no${num++}`]: num,
  [`${name}-no${num++}`]: num,
  [`${name}-no${num++}`]: num,
};
// { props-no1 : 1 , props-no2 : 2, props-no3 : 3 }

console.log(obj1); // { props-no1 : 1 , props-no2 : 2, props-no3 : 3 }

var obj2 = {
  hello(str) {
    console.log("hello" + str);
  },
};

obj2.hello("kim"); // hello kim
