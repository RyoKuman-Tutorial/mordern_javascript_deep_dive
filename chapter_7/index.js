var str = "10"; // string
var bool = "true"; // boolean

console.log(typeof +str); // number
console.log(typeof +bool); // number

console.log(typeof (1 + +"2")); // number
console.log(typeof (1 + "2")); // string
