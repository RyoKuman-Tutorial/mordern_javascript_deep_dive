class Temp {
  [Symbol.iterator]() {
    return {
      next() {
        return { value: "var", done: "done" };
      },
    };
  }
}

const iterable = new Temp();
const iterator1 = iterable[Symbol.iterator];
const next1 = iterator1();
const iteratorResult1 = next1.next();

console.dir(iterator1);
console.dir(next1);
console.dir(iteratorResult1);

const array = [1, 2, 3];
const iterator2 = array[Symbol.iterator];
const next2 = iterator2(); // 에러 발생, why?
const iteratorResult2 = next2.next();

// answer ths 때문이다, 공부 많이해서 직접 뜯어보자
