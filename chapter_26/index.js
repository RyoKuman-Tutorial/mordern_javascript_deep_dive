class Person {
  constructor(name) {
    this.name = name;
    this.func = () => {
      console.log(this);
    };
  }

  temp1 = function () {
    console.log("temp1 : ", this);
  };

  temp2 = () => {
    console.log("temp2 : ", this);
  };
}

const me = new Person("Lee");
me.temp1(); // me
me.temp2(); // me
me.func(); // me
// func 를 호출하는 주체는 me 이지만 me 가 호출하는건 사실 func 가 아닌 this.func 이다.
// 때문에 function의 경우 this 는 this.func 의 this 인 me 가 되고,
// arrow function은 me.func 의 me 가 되는것이다.

const obj = {
  func1: function () {
    console.log(this);
  },
  func2: () => {
    console.log(this);
  },
};

obj.func1();
obj.func2();
