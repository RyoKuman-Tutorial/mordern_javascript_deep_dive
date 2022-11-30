let simpleObj = Object.create(null);
console.log(Object.getPrototypeOf(simpleObj) === null); // true Object.prototype 을 상속받지 못한다.
// prototype chain : simpleObj -> null

simpleObj = Object.create(Object.prototype);
console.log(Object.getPrototypeOf(simpleObj) === Object.prototype); // true Object.prototype 를 상속받음
// prototype chain : simpleObj -> Object.prototype -> null

simpleObj = Object.create(Object.prototype, {
  x: { value: 1, writable: true, enumerable: true, configurable: true },
}); //property attributes 도 조작 가능함
// prototype chain : simpleObj -> Object.prototype -> null

const myProto = { x: 10 };
simpleObj = Object.create(myProto);
console.log(Object.getPrototypeOf(simpleObj) === myProto);
// prototype chain : simpleObj -> myProto -> Object.prototype -> null

function SimpleObj(name) {
  this.name = name;
}

simpleObj = Object.create(SimpleObj.prototype);
simpleObj.name = "LEE";
console.log(simpleObj.name);
console.log(Object.getPrototypeOf(simpleObj) === SimpleObj.prototype);
// prototype chain : simpleObj -> SimpleObj -> Object.prototype -> null
// ESLint 에서는 딱히 권장하지는 않음, Object.prototype 같은 여러 좋은 메소드들을 포함하는
// 프로토타입을 상속받지 못할 가능성이 있기 때문에,

const sampleProto = { x: 10 };
const sampleObj = {
  y: 20,
  __proto__: sampleProto, // 직접 상속의 다른 방법
};

console.log(sampleObj);
console.log(Object.getPrototypeOf(sampleObj) === sampleProto);
