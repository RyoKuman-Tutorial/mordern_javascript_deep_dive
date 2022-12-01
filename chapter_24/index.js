const a = 1;

function outer() {
  const a = 10;
  const b = 20;
  const inner = function () {
    console.log(a);
  };
  return inner;
}

// outer 함수를 호출하면, 중첩 함수 inner 를 반환한다.
// 그리고 outer 함수의 실행 컨텍스트는 실행 컨텍스트 스택에서 팝되어 제거된다.
const innerFunc = outer();
innerFunc(); // 10

// debugger 를 통해 outer 실행 컨텍스트가 제거되었음에도, a 가 스코프에 남아있는걸 확인 할 수 있다.
