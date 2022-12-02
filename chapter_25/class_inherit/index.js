class Animal {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return `이 동물의 이름은 ${this.name}`;
  }

  move() {
    return "움직였습니다!";
  }
}

class Bird extends Animal {
  fly() {
    return "날았습니다!";
  }
}

const crow = new Bird("crow");

console.log(crow);
console.log(crow.move());
console.log(crow.fly());

const condition = true;

class Temp extends (condition ? Animal : Bird) {
  // 동적 상속
  test() {
    console.log("test");
  }
}

class Fish extends Animal {
  constructor(name, age, length) {
    super(name); // 생성자를 생략하지 않는 이상, super 를 호출하지 않으면, 에러가 발생한다.
    this.age = age;
    this.length = length;
  }

  move() {
    return `${this.name} 가 ${super.move()}`; // super 을 이용해서 수퍼클래스의 메소드에 접근
  }

  getName() {
    return `${super.getName()} 인 물고기입니다.`; // HomeObject = Animal, 생성자와 축약표현된 메소드에서만 super 호출 가능
  }
}

const shark = new Fish("shark", 10, 10);
console.log(shark);
console.log(shark.move());
console.log(shark.getName());
// console.log(shark.test());
