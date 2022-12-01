# 전역 코드 평가

### 아래 코드들은 이해를 돕기 위함이다. ( 브라우저 환경이라 가정하겠다. )

```js
GlobalExecusionContext = {
  lexicalenvironment: undefined,
  ...
};
```

1. 전역 실행 컨텍스트를 생성한다.

---

```js
GlobalLexicalEnvironment = {...}

GlobalExecusionContext.lexicalEnvironment = GlobalLexicalEnvironment
```

2. 전역 렉시컬 환경을 생성하여, <br/>
   '전역 실행 컨텍스트'의 '렉시컬 환경'이, '전역 렉시컬 환경'을 가리키게 한다.

---

```js
GlobalLexicalEnvironment.ObjectEnvironmentRecord = {...}
GlobalLexicalEnvironment.DeclarativeEnvironmentRecord = {...}
```

3. 전역 렉시컬 환경은, 객체 환경 레코드(Object Environment Record)와, <br/>
   선언적 환경 레코드 (Declarative Environment Record)로 이루어져있다. <br/><br/>
   객체 환경 레코드는 var 로 선언된 전역 변수와, <br/>
   함수 선언문으로 정의된 전역 함수,<br/>
   빌트인 전역프로퍼티와 빌트인 전역 함수, 표준 빌트인 객체를 관리한다.<br/><br/>
   선언적 환경 레코드는 let const로 선언한 전역 변수를 관리한다.

---

```js
GlobalLexicalEnvironment.ObjectEnvironmentRecord.bindingObject = bindingObject -> ( window );
```

4. 객체 환경 레코드는 bindingObject ( 전역 객체 생성때 생성된 전역 객체 , 위 경우에는 window) 와 연결되는데,<br/>
   이로인해 객체 환경 레코드가 관리하는 변수 등은 전역 객체의 프로퍼티와 메소드가 된다.

---

5. 전역 환경 레코드의 [[GlobalThisValue]] 내부 슬롯에 this 가 바인딩된다. <br/>
   일반적으로 전역 코드에서 this는 전역 객체를 가리키므로 전역 환경 레코드의 [[GlobalThisValue]] 또한 전역 객체가 바인딩된다.

---

```js
GlobalExecusionContext.OuterLexicalEnvironmentReference = null;
```

6. 전역 실행 컨텍스트의, 외부 렉시컬 환경에 대한 참조를(Outer Lexical Environment Reference )null 로써 설정한다.

---
