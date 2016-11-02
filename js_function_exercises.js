// some math methods used

// pi
Math.PI; // => 3.141592653589793

// square root
Math.sqrt(256); // => 16

//exponents
Math.pow(4, 3); // 4^3 or 4*4*4 => 64

// Math.random() // generates random number between 0, 1 need to multiply it by max-min + min
// 		return Math.random() * (max - min) + min; //(max-min + 1 if it's inclusive)

// Math.floor() // returns largest whole number <= a given number (rounds down)
// 		return Math.floor((Math.random()*max) + 1);

// Math.ceil() // returns smallest integer >= a given number (rounds up)




// Complete the function fullName that should take two parameters, firstName and lastName, and returns the firstName and lastName concatenated together with a space in between.
function fullName(firstName, lastName){
	return firstName + ' ' + lastName;
}
fullName('Morgan', 'Simpson')//=> 'Morgan Simpson'



// Write a function average that takes two numbers as input (parameters), and returns the average of those numbers.
function average(n1, n2){
	return (n1 + n2) / 2;
}
average(10,30);//=> 20



// Write a power function that accepts the parameters base and exponent and returns the result. Replace square and cube with the power function you just wrote. Do not use Math.pow.
function power(base, exponent){
	if(exponent === 0){
		return 1;
	}
	 return base * power(base, exponent-1);
}
power(4,5); //=> 1024



function func(b,e){
	if (e===0){
		return 1;
	}
	return b * func(b,e-1);
}
func(4,6); //=> 4096


function power(base, exponent){
	if(exponent === 0){
		return 1;
	} else {
		return base * power(base, --exponent); //exponent-1
	}
}
power(4,3);//=> 64


function power(base, exponent) {
  var result = 1;
  while(exponent--) {
    result *= base;
  }
  return result;
}
power(4,3);//=> 64


function power(base, exponent) {
  return exponent === 0? 1 : base * power(base, --exponent);
}
power(4,3);//=> 64




// Write your own square-root function called sqrt that accepts a number parameter and returns an approximate square root. Square-root approximations make use of averages. Be sure to use the average function you previously wrote. The first version of your square root function should perform no more than 3 successive averages.
function squareRoot(number, guess){
	if (guess !== guess){
		guess = number / 2;
	}
	var avgGuess = number / guess;
	var newGuess = (avgGuess + guess) / 2;
	if(guess === newGuess){
		return guess;
	}
	return squareRoot(number, newGuess);
}
console.log(squareRoot(50,3));
//7.0710678118654755
console.log(squareRoot(256,48));
//16

// Write an expression in the console to evaluate the percentage of people in class who are wearing glasses today.
function evalPercent(totalStudents,glassesWearers){
	return glassesWearers/totalStudents * 100;
}
evalPercent(230,107); //=> 39 //%
evalPercent(230,107); //=> 46.52173913043478 //%




// The polynomial identities state that the following two equations are equivalent: (a+b)^2 = a^2 + 2ab + b^2
// Write two functions called lhs and rhs (for left-hand side and right-hand side) to compute each half of the above equation. Do they produce the same result when invoked with the same arguments?

function lhs(a,b){
	return (a+b)*(a+b);
}
lhs(5,7); //=> 144

function rhs(a,b){
	return a*a + 2*(a*b) + b*b;
}
rhs(5,7); //=> 144

// Write a function passwordLongEnough that accepts a "password" as a parameter and returns true if that password is long enough -- you get to decide what constitutes long enough.

function pwLongEnough(password){
	if(password.length >= 8){
		return true;
	}
	return false;
}
pwLongEnough('s3<retw0rd#@1g'); //=> true



// Write a function max that takes two numbers as arguments, and returns the larger one.
function max(n1, n2){
	if (n1>=n2){
		return n1;
	} 
	return n2;
}
max(349280,14); //=> 349280



// Write a function min that takes two numbers as arguments, and returns the smaller one.
function min(n1,n2){
	if(n1<=n2){
		return n1;
	}
	return n2;
}
min(349280,14); //=> 14



// Write functions larger and smaller that each accept two strings as arguments, and return the larger and smaller strings, respectively.
function larger(str1, str2){
	if (str1.length > str2.length){
		return str1;
	}
		return str2;
}
larger('i love shawn', 'shawn loves me'); //=> 'shawn loves me'



// implement the following functions:
// randInt: Should accept a single numeric argument (n), and return a number from 0 to n.
// guessMyNumber: Should accept a single numeric argument and compare it to a random number between 0 and 5. It should return one of the following strings:
// "You guessed my number!" if the argument matches the random number.
// "Nope! That wasn't it!" if the argument did not match the random number.
function guessMyNumber(n){
	if (n === Math.floor((Math.random() * 5) + 1)){
		return "You guessed my number!";
	}
	return "Nope! That was not it!";
}
guessMyNumber(3); //=> 'You guessed my number!'  => 'Nope! That was not it!'




// Summation to n: Let's implement the function sum that takes a single parameter n, and computes the sum of all integers up to n starting from 0, e.g.:
function sum(n) {
	if(n===0){
		return 0;
	}
	return n + sum(n-1);
}
sum(3); // => 3 + 2 + 1 + 0 => 6
sum(4); // => 4 + 3 + 2 + 1 + 0 => 10
sum(5); // => 5 + 4 + 3 + 2 + 1 + 0 => 15

// Factorial of n: The factorial of n is the product of all the integers preceding n, starting with 1, e.g.:
function factorial(n){
	if(n===1){
		return n;
	}
	return n * factorial(n-1);
}
factorial(3); // => 3 * 2 * 1 => 6
factorial(4); // => 4 * 3 * 2 * 1 => 24
factorial(5); // => 5 * 4 * 3 * 2 * 1 => 120


// Repeating a String n Times: Let's write a function called repeatString that takes two parameters: a string str, which is the string to be repeated, and count -- a number representing how many times the string str should be repeated
// our task is to implement the repeatString function using the observation that to repeat a string some count, we can concatenate that string onto the result of repeating the string count - 1. Your task is to implement the repeatString function using the observation that to repeat a string some count, we can concatenate that string onto the result of repeating the string count - 1.
function repeatString(str,count){
	if(count === 0){
		return '';
	}
	return str + repeatString(str,count-1);
}
repeatString('dog', 0); // => ''
repeatString('dog', 1); // => 'dog'
repeatString('dog', 2); // => 'dog' + 'dog' => 'dogdog'
repeatString('dog', 3); // => 'dog' + 'dog' + 'dog' => 'dogdogdog'



// Compute the nth Fibonacci Number: The fibonacci numbers are represented by the following sequence:
// fib(n): 1 1 2 3 5 8 13 21
// //         | | | | | |  |  |
// //      n: 0 1 2 3 4 5  6  7
// That is, fib(0) is 1, fib(1) is 1, fib(2) is 2, fib(3) is 3, fib(4) is 5, etc.

// Notice that each fibonacci number can be computed by adding the previous two fibonacci numbers, with the exception of the first two: fib(0) and fib(1). More succinctly,
// fib(0) is 1
// fib(1) is 1
// fib(n) is fib(n - 1) + fib(n - 2)
// Write a function called fib that accepts a number n as a parameter and computes the nth fibonacci number using the above rules.

function fib(n){
	if(n === 0 || n === 1){
		return 1;
	}
	return fib(n-1) + fib(n-2);
}

function fib(n){
	if (n<2){
		return 1;
	}
	return fib(n-1) + fib(n-2);
}

// fib(0) is 1, fib(1) is 1, fib(2) is 2, fib(3) is 3, fib(4) is 5, etc.




// Modify your sum function to accept two parameters, start and end: sum should now compute the sum of the numbers from start to end, e.g.
//previous summ function
function summ(n) {
	if(n===0){
		return 0;
	}
	return n + summ(n-1);
}
summ(3); // => 3 + 2 + 1 + 0 => 6
summ(4); // => 4 + 3 + 2 + 1 + 0 => 10
summ(5); // => 5 + 4 + 3 + 2 + 1 + 0 => 15


// using algorithm
function summation(min, max) {
    return ((max-min)+1) * (min + max) / 2;
}

function sum (start, end) {
  if (start === end) {
    return start;
  } else {
    return start + sum(start + 1, end);
  }
}
sum(2, 4); // => 2 + 3 + 4 => 9
sum(3, 5); // => 3 + 4 + 5 => 12
sum(2, 7); // => 2 + 3 + 4 + 5 + 6 + 7 => 27

// What happens if start is larger than end? Modify sum to check for this case and, when found, swap the start and end arguments.
function sum (start, end) {
  if (start > end) {
    return sum(end, start);
  } else if (start === end) {
    return start;
  } else {
    return start + sum(start + 1, end);
  }
}


// Write a function called isEven that, given a number n as a parameter, returns true if that number is even, and false otherwise; however, you need to do this without using the % operator.
function isEven(n) {
	if(n === 2){
		return true;
	} else if(n < 2){
		return false;
	}
	return isEven(n - 2);
}
isEven(6321); //=>false
isEven(632); //=>true



// Write a function called multiply that accepts two numbers as parameters, and multiplies them together -- but without using the * operator; instead, you'll need to use repeated addition.
function multiply(n1,n2){
	if(n1 === 0 || n2 === 0){
		return 0;
	}
	return n1 + multiply(n1,n2-1);
}
multiply(12,11); //=> 132




// Complete the function sumOfSquares that computes the sum of all the numbers from 0 to n, but where each number is squared.
function sumSquares(n){
	if(n===0){
		return 0;
	}
	return (n * n) + sumSquares(n-1);
}
sumSquares(5);
// => (5 * 5) + (4 * 4) + (3 * 3) + (2 * 2) + (1 * 1) + (0 * 0) => 55



// Write a function called sumEvens that works like the other summation functions that you've written, but only sums the even numbers between 0 and n.
function sumEvens(n){
	if(n===0){
		return n;
	}else if(n%2!==0){
		return 0;
	}else{
		return n+sumEvens(n-2);
	}
}
sumEvens(14); //=> 56


// finish advanced - https://learn.makerpass.com/groups/reactor-prep-am-20161017/courses/reactorcore/reactorprep?id=lessons%2Fintro-repetition



