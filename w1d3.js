// Recursion (Repetition)

//any problem you can solve with loops you can solve with recursion, 
//but many recursion problems are specific to or well-suited for it


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





/*
Summation to n: Let's implement the function sum that takes a single parameter n,
and computes the sum of all integers up to n starting from 0, e.g.:

function sum(n) {
  // TODO: your code here
}
sum(3); // => 3 + 2 + 1 + 0 => 6
sum(4); // => 4 + 3 + 2 + 1 + 0 => 10
sum(5); // => 5 + 4 + 3 + 2 + 1 + 0 => 15
HINT: We can rephrase "the sum of n" as "n plus the sum of n - 1".
*/


function sum(n){
	if (n > 0){
		return n + sum(n-1);
	} else {
		return 0;
	}
}

sum(5);
/* 5
4
3
2
1
0
=> 15
*/


/*
Factorial of n: The factorial of n is the product of all the integers preceding n, 
starting with 1, e.g.:

function factorial(n) {
  // TODO: your code here
}
factorial(3); // => 3 * 2 * 1 => 6
factorial(4); // => 4 * 3 * 2 * 1 => 24
factorial(5); // => 5 * 4 * 3 * 2 * 1 => 120
Implement the factorial function by observing that the "factorial of n" 
can be rephrased as "n times the factorial of n - 1".
*/

function factorial(n){
	if(n > 0){
		return n * factorial(n-1);

	} else {
		return 1;
	}
	
}

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

/*
Repeating a String n Times: Let's write a function called repeatString that takes two parameters:
a string str, which is the string to be repeated, and count -- 
a number representing how many times the string str should be repeated, e.g.

function repeatString(str, count) {
  // TODO: your code here
}
repeatString('dog', 0); // => ''
repeatString('dog', 1); // => 'dog'
repeatString('dog', 2); // => 'dog' + 'dog' => 'dogdog'
repeatString('dog', 3); // => 'dog' + 'dog' + 'dog' => 'dogdogdog'
Your task is to implement the repeatString function using the observation that to repeat a string some count, 
we can concatenate that string onto the result of repeating the string count - 1.

HINT: Observe that repeatString('dog', 0) should yield the empty string, ''. What happens if you evaluate this: '' + 'dog'?
*/

function repeatString(str, count){
	if(count === 0){
		return '';
	} else {
		return str + repeatString(str, count-1);
	}
}

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

/*
Compute the nth Fibonacci Number: The fibonacci numbers are represented by the following sequence:

fib(n): 1 1 2 3 5 8 13 21
//         | | | | | |  |  |
//      n: 0 1 2 3 4 5  6  7
That is, fib(0) is 1, fib(1) is 1, fib(2) is 2, fib(3) is 3, fib(4) is 5, etc.

Notice that each fibonacci number can be computed by adding the previous two fibonacci numbers, 
with the exception of the first two: fib(0) and fib(1). More succinctly,

fib(0) is 1
fib(1) is 1
fib(n) is fib(n - 1) + fib(n - 2)
Write a function called fib that accepts a number n as a parameter and computes the nth fibonacci number using the above rules.
*/


function fib(n){
	if(n === 0 || n === 1){
		return 1;
	} else {
		return fib(n-1) + fib(n-1);
	}
}

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
//

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


/*
Write a function called isEven that, given a number n as a parameter, 
returns true if that number is even, and false otherwise; however, 
you need to do this without using the % operator.
*/

function isEven(n)
{
	if(n===2)
		return true;
	if(n<2)
		return false;
	return isEven(n-2);
}
isEven(89);
//=> false

/*
Write a function called multiply that accepts two numbers as parameters, 
and multiplies them together -- but without using the * operator; instead, 
you'll need to use repeated addition.
*/

function multiply(a,b){
	if(b===1){
		return a;
	} else {
		return a + multiply(a, b-1);
	}
}
multiply(12,11);
//=> 132



function stringLength(str)
{
	if(str==="")
		return 0;
	return 1+stringLength(str.slice(1));
}


