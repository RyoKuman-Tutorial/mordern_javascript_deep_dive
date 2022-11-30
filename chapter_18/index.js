const descriptor = Object.getOwnPropertyDescriptors(func1);
console.log(descriptor);

function func1(x, y, z) {
  const arguLength = Object.getOwnPropertyDescriptors(func1).length.value;
  const array = Array.prototype.slice.call(arguments);

  console.log("func1 : ", [x, y, z]);
  console.log("func1 arguments : ", array);

  if (arguments.length > arguLength) {
    console.log("너무 길어요");
  }
}

func1(1, 2, 3);

function sum(...args) {
  return args.reduce((pre, cur) => pre + cur, 0);
}

console.log(sum(1, 2, 3, 4, 5));
