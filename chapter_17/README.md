# CONSTRUCTOR

## 동작원리

```js
function Circle(radius) {
  this.radius = radius;
  this.getDiameter = function () {
    return this.radius * 2;
  };
}

const circle1 = new Circle(1);
```

위 코드에서 new 를 붙임으로써 달라지는 것은, <br/>
this 가 지칭하는 대상이다. <br/>

차례대로 코드를 읽어본다면 <br/>

```js
this.radius = radius;
this.getDiameter = function () {
  return this.radius * 2;
};
```

제일 먼저 위 두 코드를 실행시켜준다.<br/>
또한 위 코드에서 지칭하는 this 는<br/>

```js
const circle1 = new Circle(1);
```

위 코드에서 new 로써 생성된 객체를 지칭한다.

만약 위 코드들에서 new 가 존재하지 않는다면,<br/>
this가 지칭하는 대상은 new 로써 생성된 임의의 객체가 아닌, node 의 경우 global, V8 의 경우, window 를 뜻한다.
