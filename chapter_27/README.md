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

===

### 리터럴을 이용한 배열 생성

```js
const arr1 = []; // length = 0
const arr2 = [1, 2]; // length = 2
```

대괄호 ([]) 를 이용하여 생성<br/>

===

### Array를 이용한 배열 생성

```js
const arr1 = new Array(10); // length = 10
const arr2 = new Array(); // length =  0 ,[]
```

요소로 전달되는 값들을 배열에 할당하는 방법으로, 배열을 생성한다.<br/>
만약 요소가 1개이고, 요소의 자료형이 숫자인 경우,<br/>
해당 값의 길이를 가진 빈 배열을 생성한다.<br/>

===

### Array.of

```js
Array.of(10);
```

new Array 와 사용법이 거의 같다.<br/>
하지만 숫자인 요소가 1개만 오더라도, 해당 요소를 배열에 할당한다.<br/>

===

### Array.from

```js
const arr8 = Array.from({ length: 2, 1: "b" }); // [ empty , 'b' ] , 유사 배열 객체를 전달
const arr9 = Array.from("hello"); // [ 'h', 'e', 'l', 'l', 'o'  ] , 이터러블 객체 전달
```

요소를 두개까지 받을 수 있으며,<br/>
첫번째 요소로는 유사 배열 객체 혹은 이터러블 객체를 받는다.<br/>

```js
const arrMaker = (a, b) => b;
const arr10 = Array.from({ length: 3 }, (a, i) => i); // [ 0, 1, 2 ], 두번째 요소로 함수 전달
const arr11 = Array.from({ length: 3 }, arrMaker); // [ 0, 1, 2 ], 두번째 요소로 함수 전달
```

두번째 요소로 함수를 전달 할 수 있으며, 해당 함수의 리턴값을 배열에 할당시킨다.<br/>

===

##
