class Circle {
  constructor() {
    this.size = 0;
    this.diaMeter = 0;
  }

  get radius() {
    //getter
    return this.diaMeter / 2;
  }

  set radius(radius) {
    //setter
    this.diaMeter = radius * 2;
    this.size = 3.14 * radius ** 2;
  }
}

const circle = new Circle();
circle.radius = 10;
console.log(circle.radius);
console.log(circle);
