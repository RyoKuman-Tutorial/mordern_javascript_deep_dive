# Array

## 배열 생성법

```js
const arr1 = [1, 2, 3];
const arr2 = new Array(1, 2, 3);
const arr3 = [1, , 7, , , 4]; // 희소 배열
const arr4 = ["hello", 1, false];
```

new Array 를 통해서, 혹은 리티럴을 이용해 생성이 가능하다.<br/>
배열은 객체의 파생형태로, 배열에 모든 종류의 값이 저장 가능하다.<br/>
배열의 요소가 연속적으로 위치하지 않고 일부가 비어있는 배열을 희소 배열이라고 한다.<br/>

### 리터럴을 이용한 배열 생성

```js
const arr1 = []; // length = 0
const arr2 = [1, 2]; // length = 2
```

대괄호 ([]) 를 이용하여 생성<br/>

### Array를 이용한 배열 생성

```js
const arr1 = new Array(10); // length = 10
const arr2 = new Array(); // length =  0 ,[]
```

대괄호 ([]) 를 이용하여 생성<br/>
