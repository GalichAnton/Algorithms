class Square {
  static roundSquare(r) {
    return r * r * Math.PI;
  }
  static rectangleSquare(a, b) {
    return a * b;
  }
  static triangleSquare(a, h) {
    return (1 / 2) * a * h;
  }
}
console.log(Square.roundSquare(10));
console.log(Square.rectangleSquare(10, 10));
console.log(Square.triangleSquare(10, 10));

const getSquare = (figure) => {
  switch (figure) {
    case "round":
      return function (r) {
        return r * r * Math.PI;
      };
    case "rectangle":
      return function (a, b) {
        return a * b;
      };
    case "triangle":
      return function (a, h) {
        return (1 / 2) * a * h;
      };
    default:
      return;
  }
};
const roundSquare = getSquare("round");
const rectangleSquare = getSquare("rectangle");
const triangleSquare = getSquare("triangle");

console.log(roundSquare(10));
console.log(rectangleSquare(10, 10));
console.log(triangleSquare(10, 10));