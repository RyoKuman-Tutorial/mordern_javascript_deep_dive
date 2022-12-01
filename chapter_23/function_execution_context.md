# 함수 실행 컨텍스트

## 1. 함수 실행 컨텍스트 생성

### 아래 코드들은 이해를 돕기 위함이다. ( 브라우저 환경이라 가정하겠다. )

```js
functionExecutionContext.lexicalEnvironment = functionLexicalEnironment = {
  FunctionEnvironmentRecord = { arguments, ...},
  OuterLexicalEnvironmentReference,
};
```

1. 함수 렉시컬 환경을 생성하고, 함수 실행 컨텍스트에 바인딩한다. <br/>
   홤수 렉시컬 환경은, 함수 환경 레코드와 (Function Environment Record),<br/>
   외부 렉시컬 환경에 대한 참조로 이루어져있다. (Outer Lexical Environment Reference)<br/>
   함수 환경 레코드는 매개변수, arguments, 함수 내부에서 선언한 지역 변수와 중첩 함수를 등록 및 관리한다.

---

2. 함수 환경 레코드의 [[ThisValue]] 내부 슬롯에 this를 바인딩한다. <br/>
   this 는 함수 호출 방식에 따라 결정된다.

---

3. 외부 렉시컬 환경에 대한 참조 (Outer Lexical Environment Reference) 를 결정한다.<br/>

---

## 2. 함수 코드 실행

## 3. 블록 레벨 스코프

if 등의, 코드 블록이 실행되면 <br/>
선언적 환경 레코드를 갖는 렉시컬 환경을 새롭게 생성하며,<br/>
이때 새롭게 생성된 코드 블럭을 위한 렉시컬 환경의, 외부 렉시컬 환경에 대한 참조는<br/>
해당 코드블록이 실행되기 이전의 전역 렉시컬 환경을 가리킨다

```js
let x = 1;
// 외부 렉시컬 환경에 대한 참조 = 전역 렉시컬 환경
// 선언적 환경 레코드를 갖는 렉시컬 환경 생성
if (true) {
  let x = 10;
  console.log(x); // 10
  // 외부 렉시컬 환경에 대한 참조 = 전역 렉시컬 환경
  // 선언적 환경 레코드를 갖는 렉시컬 환경 생성
  if (true) {
    // 외부 렉시컬 환경에 대한 참조 = 전역 렉시컬 환경
  }
}

console.log(x); // 1

if (true) {
  let a = 1; // 외부 렉시컬 = 전역 렉시컬 환경
  if (true) {
    let b = 1; // 외부 렉시컬 = a가 선언된 블록의 렉시컬 환경
    if (true) {
      let c = 1; // 외부 렉시컬 = b가 선언된 블록의 렉시컬 환경
    }
  }
  console.log(b);
}
```
