# ITERABLE

ES6 에서 도입된 이터레이션 프로토콜은, <br/>
순회 가능한 데이터 컬렉션을 만들기 위해 <br/>
ECMAScript 사양에 정의하여 미리 약속된 규칙이다. <br/>

## ITERABLE PROTOCOL

```js
const iterable = {
  [Symbol.iterator] : iterator(){...}
}; // for...of 순회 가능
```

Symbol.iterator를 프로퍼티 키로 사용한 메서드를 직접 구현하거나, <br/>
프로토타입 체인을 통해 상속받은 Symbol.iterator 매서드를 호출하면, <br/>
이터레이터 프로토콜을 준수한 이터레이터를 반환하는데, 이러한 규약을 이터러블 프로토콜이라 한다. <br/>

또한, 이러터블 프로토콜을 준수한 객체를 이터러블이라고 한다. <br/>
이터러블은 for...of 문으로 순회할 수 있으며, <br/>
스프레드 문법과 배열 디스트럭처링 할당의 대상으로 사용할 수 있다.

## ITERATOR PROTOCOL

```js
const iterable = {
  [Symbol.iterator] : function(){
    ...
    return {
      next(){
        return { value : var, done : done}
      }
      };
    },
};
```

이터러블 ( 이터러블 포로토콜을 준수한 객체 ) 의 Symbol.iterator 메서드를 호출하면, <br/>
이터레이터 프로토콜을 준수한 이터레이터를 반환한다. <br/>
이터레이터는 next 메서드를 소유하며, next 메서드를 호출하면, <br/>
이터러블을 순회하며 value 와 done 프로퍼티를 갖는 이터레이터 리절트 객체를 반환한다. <br/>

이러한 규약을 이터레이터 프로토콜이라 하며, 이터레이터 프로토콜을 준수한 객체르르 이터레이터라 한다. <br/>
이터레이터는 이터러블의 요소를 탐색하기 위한 포인터 역할을 한다. <br/>
