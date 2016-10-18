// Introduction to Functions
// exercises from https://learn.makerpass.com/groups/reactor-prep-am-20161017/courses/reactorcore/reactorprep?id=lessons%2Fintro-functions


/*
Complete the function cube that returns the cube of x
*/
function cube(x) {
	return x * x * x;
}
cube(4);
// => 64






/*
Complete the function fullName that should take two parameters, firstName and lastName, and returns the firstName and lastName concatenated together with a space in between.
*/
function fullName(firstName, lastName) {
	return firstName + " " + lastName;
}
fullName("Morgan", "Simpson");





/* Write a function average that takes two numbers as input (parameters), and returns the average of those numbers
*/
function average(one, two) {
  return (one + two) / 2;
}
average(8,4);
// => 6



/*
Write a function greeter that takes a name as an argument and greets that name by returning something along the lines of "Hello, <name>!"
*/
function greeter(name){
  return "Hello, " + name + "!";
}
greeter("Shawn");





/* Translate these geometric formulas (the area & perimeter of a square, rectangle, parallelogram, trapezoid, and triangle and area & circumference of a circle) intro JavaScript functions.
*/
// Square
function areaSquare(s) {
	//A = s^2
	return Math.pow(s, 2);
}
areaSquare(4);
// =>16

function perimSquare(s) {
	//P = 4s
	return 4 * s;
}
perimSquare(4);
// =>16


// Rectangle
function areaRect(l, w) {
	//A = lw
	return l * w;
}
areaRect(8,2);
// => 16


function perimRect(l, w) {
	//P = 2l + 2w
	return 2 * (l + w);
}
perimRect(6,2);
// => 16

// Parallelogram

function areaPrllgrm(l, h) {
	//A = lh 
	return l * h;
}
areaPrllgrm(8,2);
// => 16

function perimPrllgrm(l, w) {
	//P = 2l + 2w
	return (2 * l) + (2 * w);
}
perimPrllgrm(6,2);
// => 16


// Trapezoid
function areaTrap(h, b1, b2) {
	//A =1/2h(b1 + b2)
	return (h / 2) * (b1 + b2);
}
areaTrap(2,8,8);
// => 16

function perimTrap(s1, s2, b1, b2) {
	//P = s1 + s2 + b1 + b2
	return s1 + s2 + b1 + b2;
}
perimTrap(2, 5, 6, 3);
// => 16

// Triangle
function areaTri(b, h) {
	//A = 1/2bh
	return (b * h) / 2; 
}
areaTri(8, 4);
// => 16

function perimTri(s1, s2, b) {
	//P = s1 + s2 + b
	return s1 + s2 + b;
}
perimTri(5, 7, 4);
// => 16


// Circle
function areaCir(r) {
	//A = πr^2
	return Math.PI * (r * r);
}
areaCir(8);
// => 201.06192982974676

function circCirc(r) {
	//C = 2π * r
	return (2 * Math.PI) * r;
}
circCirc(8);
// => 50.26548245743669




// some math methods used

// pi
Math.PI; // => 3.141592653589793

// square root
Math.sqrt(256); // => 16

//exponents
Math.pow(4, 3); // 4^3 or 4*4*4 => 64




/*
Write a function futureValue that can be used to calculate the future value of a quantity of money using compound interest.

Use the function to calculate what the future value of $1700 (P = 1700) deposited in a bank that pays an annual interest rate of 4.7% (i = 0.047), compounded quarterly (n = 4) after 6 years (t = 6) (you can use Math.pow to do exponentiation).

*/
function futureValue(P, i, n, t) {
	return P*Math.pow((1 + i/n), n*t); 
}
futureValue(1700, 0.047, 4, 6);
// => 2250.1218394891257





/*
Write a power function that accepts the parameters base and exponent and returns the result. Replace square and cube with the power function you just wrote. Do not use Math.pow.
*/
function power(base, exponent) { 
  if (exponent == 0)
    return 1;
  else
    return base * power(base, exponent - 1);
}
power(8,4);
// => 4096




