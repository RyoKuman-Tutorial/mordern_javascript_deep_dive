const iterable = [1, 2, 3];

const iterator = iterable[Symbol.iterator]();

while (true) {
  const rest = iterator.next();
  if (rest.done) break;
  const item = rest.value;
  console.log(item);
}
