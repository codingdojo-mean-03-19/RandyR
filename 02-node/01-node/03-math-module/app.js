var mathLibrary = require("./mathlib");
var math = new mathLibrary();

var a = 1;
var b = 35;

console.log("Sum of " + a + " and " + b + " is: ", math.add(a, b));
console.log("Product of " + a + " and " + b + " is: ", math.multiply(a, b));
console.log("Square of " + a + " is: ", math.square(a));
console.log("Random number between " + a + " and " + b + ": ", math.random(a, b));