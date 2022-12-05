const iterable = [1, 2, 3];

const iterator = iterable[Symbol.iterator]();

while (true) {
  const rest = iterator.next();
  if (rest.done) break;
  const item = rest.value;
  console.log(item);
}

class Fibonacci {
  constructor(value) {
    this.value = value;
  }

  [Symbol.iterator]() {
    let [pre, cur] = [0, 1];
    const max = this.value;
    let counter = 0;

    return {
      next() {
        [pre, cur] = [cur, pre + cur];
        counter++;
        return { value: cur, done: counter > max };
      },
    };
  }
}

const class1 = new Fibonacci(7);
for (const num of class1) console.log("fib : " + num);
