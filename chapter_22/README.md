# THIS

## 호출 위치에 따른, this 의 변화

- 일반 함수 호출 : 전역 객체
- 매서드 호출 : 매서드를 호출한 객체
- 생성자 함수 호출 : 생성자가 생성할 인스턴스
- apply,call,bind 에 의한 간접호출 : 매서드에 첫번째 인수로 전달한 객체

## 매서드에 대하여

객체 내부의 매서드는, 어디에 종속된 객체가 아니라<br/>
완전히 독립된 객체임을 알 수 있다.

```js
obj = {
  foo() {
    console.log(this); // obj
  },
};

const temp = obj.foo;
console.log(obj.foo === temp); // true

obj.foo(); // this = obj
temp(); // this = window
```
