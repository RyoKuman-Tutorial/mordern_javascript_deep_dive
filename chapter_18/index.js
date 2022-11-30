function Circle(radius) {
  this.radius = radius;
  this.getDiameter = function () {
    return this.radius * 2;
  };
}

const circle1 = new Circle(1);
