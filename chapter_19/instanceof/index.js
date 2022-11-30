function Coffee(name) {
  this.name = name;
}

const latte = new Coffee("latte");

console.log(latte instanceof Coffee); // true, 프로토타입 체인 상에 Coffee 가 존재하므로
console.log(latte instanceof Object); // true, 프로토타입 체인 상에 Object 가 존재하므로
