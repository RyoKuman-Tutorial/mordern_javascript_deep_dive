func1("hello"); // error
func2("hello"); // error
func3("hello"); // func3 : hello

const func1 = function (value) {
  console.log("func1 : " + value);
};

const func2 = (value) => {
  console.log("func2 : " + value);
};

function func3(value) {
  console.log("func3 : " + value);
}

(function func4() {
  console.log("IFE");
}());

func4(); // 에러 ㅇ
