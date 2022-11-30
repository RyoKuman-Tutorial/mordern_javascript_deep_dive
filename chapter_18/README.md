# FIRST CLASS OBJECT

## 조건

1. 모든 요소는 함수의 실제 매개변수가 될 수 있다.
2. 모든 요소는 함수의 반환 값이 될 수 있다.
3. 모든 요소는 할당 명령문의 대상이 될 수 있다.
4. 모든 요소는 동일 비교의 대상이 될 수 있다.

모든 조건에 해당하는건 function 뿐

## ARGUMENTS

function은 arguments 를 통해 전달받은 arguments 의 정보를 볼 수 있다.

```js
function func(a, b, c) {
  console.log(arguments);
}
```

위 함수가 있다고 할 때,

```js
func(1, 2, 3);
func(1, 2);
```

차례대로

```js
{
  0: 1
  1: 2
  2: 3
  callee: ƒ func1(x, y, z)
  length: 3
  Symbol(Symbol.iterator): ƒ values()
}

{
  0: 1
  1: 2
  callee: ƒ func1(x, y, z)
  length: 2
  Symbol(Symbol.iterator): ƒ values()
}
```

객체를 콘솔에 출력한다.
