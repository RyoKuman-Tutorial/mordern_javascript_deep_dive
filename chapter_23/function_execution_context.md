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
