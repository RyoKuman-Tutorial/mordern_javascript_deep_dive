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

// innerFunc 는 외부 함수보다 더 오래 유지되었다. 이러한 중첩 함수를 클로저 ( closure ) 라고 한다.
// outer 의 실행 컨텍스트는 사라졌지만, innerFunc 의 [[Environment]] 슬롯에 의해 참조되고 있는
// outer 의 렉시컬 환경은 사라지지 않는다.
// debugger 를 통해 outer 실행 컨텍스트가 제거되었음에도, a 가 스코프에 남아있는걸 확인 할 수 있다.
// 이러한 변수들을 자유 변수라고 한다.

const counter1 = (function () {
  let num = 0; // num이 숨겨졌다.
  return {
    increase() {
      return ++num;
    },
    decrease() {
      return num > 0 ? --num : 0;
    },
  };
})();

console.log(counter1.increase()); // 1
console.log(counter1.increase()); // 2
console.log(counter1.decrease()); // 1

const Counter2 = (function () {
  let num = 0;
  function Counter2() {}
  Counter2.prototype.increase = function () {
    return ++num;
  };
  Counter2.prototype.decrease = function () {
    return num > 0 ? --num : 0;
  };

  return Counter2;
})();

const counter = new Counter2();
console.log(counter.increase()); // 1
console.log(counter.increase()); // 2
console.log(counter.decrease()); // 1

function makeCounter(aux) {
  let count = 0;
  return function () {
    count = aux(count);
    return count;
  };
}

const increase = makeCounter(function (n) {
  return ++n;
});

const decrease = makeCounter(function (n) {
  return n > 0 ? --n : 0;
}); // 렉시컬 환경이 increase 랑 다르다, 동일한 스코프에서 선언되지 않았으므로,

console.log(increase()); // 1
console.log(increase()); // 2
console.log(decrease()); // 0
