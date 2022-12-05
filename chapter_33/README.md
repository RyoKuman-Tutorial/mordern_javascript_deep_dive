# SYMBOL

7번째 데이터 타입으로 변경 불가능한 원시 타입의 값이며,
다른값과 중복되지않는 유일무이한 값이다.

## 사용법

```js
const symbol1 = Symbol();
const symbol2 = Symbol("description");
console.log(symbol1); // Symbol()
console.log(symbol2); // Symbol('description')
```

기본적으로 심벌( Symbol )함수를 이용하여 만들며,<br/>
추가적으로 설명 ( description )을 요소로써 추가할 수 있다.<br/>
또한 심벌( Symbol )은 설명을 제외한 내부 값을 참조할 수 없다.

## DESCRIPTION ( 설명 )

```js
const symbol1 = Symbol("a");
const symbol2 = Symbol({ name: "alex", age: 10 });

console.log(symbol1.description); // 'a'
console.log(symbol2.description); // [object Object]
console.log(symbol2.description.name); // undefined

const symbol3 = Symbol({ hello: "hello" });
console.log(symbol3.description === symbol2.description); // true
```

심벌의 설명으론, 어떤 값이든 올 수 있으나, <br/>
심벌의 설명으로 객체가 올 경우, 해당 객체의 내부 값을 참조할 수 없다. <br/>

## GLOBAL SYMBOL REGISTRY

전역 심벌 레포지토리, 심볼을 관리하는 레포지토리이디.<br/>
for, keyFor 을 활용하여, 헤당 레포지토리에 접근이 가능하다 <br/>

### FOR

```js
const symbol1 = Symbol.for("hello");
const symbol2 = Symbol.for("hello");
console.log(symbol1 === symbol2);
```

for을 이용한 경우, 요소로 전달받은 값에 해당하는 설명을 지닌 심벌을, 레포지토리 내부에서 검색한다. <br/>
만약, 해당하는 심벌이 없는 경우, 새로운 심벌을 생성한 뒤에, 레포지토리에 심벌을 등록한다.<br/>
만약, 해당하는 심벌이 있는 경우, 해당 심벌을 불러온다.<br/>

### KEYFOR

```js
const symbol1 = Symbol("hello");
const symbol2 = Symbol.keyFor(symbol1);
const symbol3 = Symbol.keyFor(symbol1);

console.log(symbol1 === symbol2); // false
console.log(symbol1 === symbol3); // false
console.log(symbol2 === symbol3); // true
```

keyFor 을 이용한 경우, 요소로 전달받은 값에 해당하는 심벌을, 레포지토리 내부에서 검색한다. <br/>
만약, 해당하는 심벌이 없는 경우, 새로운 심벌을 생성한 뒤에, 레포지토리에 심벌을 등록한다.<br/>
만약, 해당하는 심벌이 있는 경우, 해당 심벌을 불러온다.<br/>
