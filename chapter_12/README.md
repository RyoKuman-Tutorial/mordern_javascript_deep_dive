# FUNCTION

## HOISTING

function 을 표현식이 아닌, 선언식으로 할 경우, <br/>
함수 선언 위치와 관계없이 사용이 가능하다.

```js
func3(1);

function func3(value) {
  console.log("func3 : " + value);
}

func3(1); // 에러없이 잘 실행된다.
```

```js
func3(1); // 에러발생

const func3 = (value) => {
  console.log("func3 : " + value);
};

func3(1);
```
