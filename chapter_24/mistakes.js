// Wrong
var funcs1 = [];

for (var i = 0; i < 3; i++) {
  funcs1[i] = function () {
    return i; // i 는 전역변수
  };
}

for (var j = 0; j < funcs1.length; j++) {
  console.log(funcs1[j]()); // 여기서 i 값은 3으로 고정
}

// right
var funcs2 = [];
for (var i = 0; i < 3; i++) {
  funcs2[i] = (function (id) {
    return function () {
      return id; // id 는 생성되는 function 마다 독립적이므로, 다른 값이 나온다
    };
  })(i); // 원시 값 전달
}

for (var j = 0; j < funcs2.length; j++) {
  console.log(funcs2[j]());
}
