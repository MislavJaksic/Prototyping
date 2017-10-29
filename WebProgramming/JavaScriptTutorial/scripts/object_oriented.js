function Rectangle(width, height) {
  this.width = width
  this.height = height
};
Rectangle.prototype.WriteProperties = function() {
  console.log("width");
  console.log(this.width);
  console.log("height");
  console.log(this.height);
};

function Square(length) {
  Rectangle.call(this, length, length) /* Call parent constructor */
  
  this.length = length
};
Square.prototype = Object.create(Rectangle.prototype); /* Prototypal inheritance or delegation */
Square.prototype.constructor = Square;

Square.prototype.WriteProperties = function() { /* Alter */
  Rectangle.prototype.WriteProperties.call(this); /* Call parent function */
  console.log("length");
  console.log(this.length);
};

small_square = new Square(5);
console.log(small_square.length);
console.log(small_square.width);
console.log(small_square.height);
console.log("-.-.-");
small_square.WriteProperties();