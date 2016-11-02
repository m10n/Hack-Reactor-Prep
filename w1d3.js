// Recursion (Repetition)

//any problem you can solve with loops you can solve with recursion, but many recursion problems are specific to or well-suited for it




// Write a power function that accepts the parameters base and exponent and returns the result. 
// Replace square and cube with the power function you just wrote. Do not use Math.pow.

function power(base, exponent) { 
  if (exponent === 0)
    return 1;
  else
    return base * power(base, exponent - 1);
}
power(8,4);
// => 4096



function powerNR(base, exp) {
  var result = 1;
  while(exp--) {
    result *= base;
  }
  return result;
}
/* Countdown from n... 
using a loop vs. recursion
*/

var countDownFrom = function(n){
	while (n >= 0){
		console.log(n);
		n--;
	}
}

countDownFrom(5);

/*
5
4
3
2
1
0
*/

var countDownFrom = function(n){
	//base case
	if (n === 0){
		return // needs a specific return statement because it exits the function
	}
	//recursive case
	countDownFrom(n-1);
}
countDownFrom(5);






// Summation to n: Let's implement the function sum that takes a single parameter n, and computes the sum of all integers up to n starting from 0, e.g.:
function sum(n){
	if (n > 0){
		return n + sum(n-1);
	} else {
		return 0;
	}
}
sum(3); // => 3 + 2 + 1 + 0 => 6
sum(4); // => 4 + 3 + 2 + 1 + 0 => 10
sum(5); // => 5 + 4 + 3 + 2 + 1 + 0 => 15
sum(5);
/* 5
4
3
2
1
0
=> 15
*/



// Factorial of n: The factorial of n is the product of all the integers preceding n, 
// starting with 1.

// Implement the factorial function by observing that the "factorial of n" can be rephrased as "n times the factorial of n - 1".
function factorial(n){
	if(n > 0){
		return n * factorial(n-1);
	}
	return 1;
}
factorial(3); // => 3 * 2 * 1 => 6
factorial(4); // => 4 * 3 * 2 * 1 => 24
factorial(5); // => 5 * 4 * 3 * 2 * 1 => 120
factorial(5);
/*
5
4
3
2
1
0
=> 120
*/


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

/*
Harris' notes
// repeating(str, count)
// repating('dog', 2)   => "dogdog"

function repeatString(str, count) {
	//base case
  //condition where it will help recursion to stop. 
  if(count === 0) {
  	return ""
  }
  //recursive case  
  return str + repeatString(str, count - 1);
}

'dog' + repeatString('dog', 2);
'dog' + 'dog' + repeatString('dog', 1);
'dog' + 'dog' + 'dog' + repeatString('dog', 0);
'dog' + 'dog' + 'dog' + "" = 'dogdogdog'; 

repeatingString('dog',3)  => 'dogdogdog'
*/



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

/*
Let's pretend for a moment that JavaScript does not have the addition operator + -- instead, 
it comes with two functions called inc and dec that perform increment and decrement respectively:
// ignore the fact that inc makes use of +
function inc(x) {
  return x + 1;
}

function dec(x) {
  return x - 1;
}
Your task is to write a function called add that takes two numbers as parameters, x and y, and adds them together. 
The catch is that you can only use inc and dec to accomplish this.
*/

//More Practice #3
// add(1, 5) => 6
// add(1, 7) => 8
// add(1, -5) => -4

function inc(x) {
  return x + 1;
}

function dec(x) {
  return x - 1;
}


function add(x,y) {
	//base case
  if(y === 0) {
    return x;
  }
  
  if(y < 0) {
  //2nd base case
  if(y === 0) {
  	return x;
  }   
  //2nd recursive case
  return add(dec(x), y + 1);
  }
  //recursive case 
  return add(inc(x), y - 1);
}


add(1, -2); => -1
add(0, -1);
add(-1, 0); => -1

function inc(x) {
  return x + 1;
}

function dec(x) {
  return x - 1;
}


function add (x, y) {
  if (y === 0) {
    return x;
  } else {
    return add(inc(x), dec(y))
  }
}

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
multiply(9,8); //=> 72

// Write a function called stringLength that accepts a string as a parameter and computes the length of that string; however, as you may have guessed, you are not allowed to use the length property of the string! make use of the string method called slice.
"".slice(1); //=> ''
"hello".slice(0); //=> 'hello'
"hello".slice(1); //=> 'ello'

function stringLength(str){
	if(str === ''){
		return 0;
	}
	return 1 + stringLength(str.slice(1));
}
stringLength('I love you'); //=> 10



// The "modulo" operator (%) computes the remainder after dividing its left operand by its right one. Write a function called modulo that works like the % operator, but without using it.
function modulo(x,y){
	if(x === 0){
		return 0;
	} else if(y > x){
		return x;
	} else {
	return modulo(x-y,y);
	}
}
7 % 5; // => 2
8 % 10; // => 8
modulo(9,3); // => 0
modulo(66,5); // => 1




// Write a function called countChars that accepts two parameters: a string and a character. This function should return a number representing the number of times that the character appears in string. To access the first element of a string, you can use the following syntax:
// // access the element at index 0
// "hello"[0]; // => "h"
// "dog"[0]; // => "d"
// HINT: You'll also need to make use of the slice method as shown above in the exercise on computing the length of a string.

function countChars(str,char){
	var i = str.length-1;
	var count = 0;
	while(i >= 0){
		if(str[i] === char){
			count++;
		}
		i--;
	}
	return count;
}
countChars('morgan missen','m'); //=> 2
//works but doesn't use slice

function countChars (str, char) {
  if (str === '') {
    return 0;
  } else if (str[0] === char) {
    return 1 + countChars(str.slice(1), char);
  } else {
    return countChars(str.slice(1), char);
  }
}




// Implement a function called indexOf that accepts two paramters: a string and a character, and returns the first index of character in the string. You'll need to make use of the techniques for accessing the first element of a string and the rest of the string (slice) as before.
function indexOf (str, char) {
  if (str === '') {
    return 1;
  } else if (str[0] === char) {
    return 0;
  } else {
    return 1 + indexOf(str.slice(1), char);
  }
}
indexOf('doesthiswork?','d'); //=> 0
