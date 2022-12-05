const sym1 = Symbol();
const sym2 = Symbol("des");
const sym3 = Symbol({ name: "alex", age: 11 });

console.log(sym1.description);
console.log(sym2.description);
console.log(sym3.description);
console.log(sym3.description.name);

const symbol1 = Symbol.for("hello");
const symbol2 = Symbol.for("hello");

console.log(symbol1 === symbol2); // true

const symbol = Symbol("hello");
const symbolFor1 = Symbol.keyFor(symbol);
const symbolFor2 = Symbol.keyFor(symbol);

console.log(symbol === symbolFor1); // false
console.log(symbol === symbolFor2); // false
console.log(symbolFor1 === symbolFor2); // true
