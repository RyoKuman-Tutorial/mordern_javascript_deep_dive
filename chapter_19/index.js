function constructor(name) {
  this.name = name;
  this.gender = "male";
}

constructor.prototype.print = function () {
  console.log("name is : " + this.name);
  console.log("gender is : " + this.gender);
};

constructor.prototype.genderChange = function () {
  if (this.gender === "male") this.gender = "female";
  else if (this.gender === "female") this.gender = "male";
};

const nick = new constructor("nick");
const james = new constructor("james");

nick.genderChange();
nick.print();
james.print();

console.log(nick.print === james.print); // true prototype 의 function 이므로 같음
console.log(nick.genderChange === james.genderChange); // true prototype 의 function 이므로 같음
