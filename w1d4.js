
var result = 0;
while (n > 0){
	result = result + sum(n-1);
}
return result;
}

// Warm-up exercises (Recursion)
//https://learn.makerpass.com/groups/reactor-prep-am-20161017/courses/reactorcore/reactorprep?id=warmups%2Fwarmup14

/*
Previous recursion lecture videos:
https://youtu.be/t2QsAAX3viE?t=3m
https://www.youtube.com/watch?v=437E0eW69us
https://www.youtube.com/watch?v=p6V670tNV6Q&list=PLMN_t2KZwYK1nsLhzKp1bTbBxjnOsmKdr&index=5
*/

/*
Complete the function sumOfSquares that computes the sum of all the numbers from 0 to n, but where each number is squared.

function sumOfSquares(n) {
  // TODO: your code here
}
sumOfSquares(5);
// => (5 * 5) + (4 * 4) + (3 * 3) + (2 * 2) + (1 * 1) + (0 * 0) => 55
*/

function sumOfSquares(n) {
  if(n===0) {
    return 0;
  } /* else { */
  return (n*n) + sumOfSquares(n-1);
}

sumOfSquares(5);

/*
Write a function called sumEvens that works like the other summation functions that you've written, 
but only sums the even numbers between 0 and n.
*/
  
function sumEvens(n){
	if(n===0){
		return n;
	}else if(n%2!==0){
		return sumEvens(n-1);
	}else{
		return n+sumEvens(n-2);
	}
}

sumEvens(4);
//=> 6

sumEvens(5);
//=> 6


// Variables (lecture notes)

/*
var (keyword) a label associated with a value
You can declare a variable without a value (undefined)
You can also assign the value of a variable to another variable

var x = "Hello"; 
var y = x; 
y;
//=> "Hello"

Functions create their own local scope. Variables declared inside a
local scope are only available there.

Variables declared outside a function are in the global scope (use these less)
*/


/*
Fix each of the following variable declarations in a console -- some are syntactically invalid, 
some are disobey style guidelines, and some are just weird.

var "animal" = "monkey";
var "monkey" = animal;
var x= 15;
var y =10;
var var = "huh?";
var true = false;
var isTenEven = 10 % 2 = 0;
  */
var animal = "monkey";
var monkey = "animal";
var x = 15;
var y = 10;
var what = "huh?";
var notTrue = false;
var isTenEven = 10 % 2 = 0;

/*
Perform the following in the console:

Create a variable firstName and assign your first name to it.
Create another variable, lastName, and assign your last name to it.
Have a middle name? If so, repeat the process.
Now, create a variable fullName and assign your full name to it by using the above variables.
*/

var firstName = 'Morgan';
var lastName = 'Missen';
var middleName = 'Jane';

var fullName = firstName + ' ' + middleName + ' ' + lastName;



/*
Write a function called counter that, when invoked, always returns a number that is one more than the previous invocation. For instance:

function counter() {
  // TODO: your code here
}
counter(); // => 1
counter(); // => 2
counter(); // => 3
// etc.
HINT: You'll need a variable for this. Where should the variable be declared?
*/

var count = 1;
function counter() {
  return count++;
}

console.log(counter());

//while

/*
Summation to n: Let's implement the function sum that takes a single parameter n, and computes the sum of all integers up to n starting from 0, e.g.:
function sum(n) {
  // TODO: your code here
}
sum(3); // => 6
sum(4); // => 10
sum(5); // => 15
*/

function sum(n){
  var result = 0;
  while(n > 0){
    result += n;
    n -= 1;
  }
  return result;
}
sum(3); // =>6
sum(4); // => 10
sum(5); // => 15

/*
Factorial of n: The factorial of n is the product of all the integers preceding n, starting with 1, e.g.:

  function factorial(n) {
  // TODO: your code here
}
factorial(3); // => 6
factorial(4); // => 24
factorial(5); // => 120
*/

function factorial(n){
  var result = 1;
  while(n>1){
    result *= n;
    n -= 1;
  }
  return result;
}
factorial(3); // => 6
factorial(4); // => 24
factorial(5); // => 120
//5*4*3*2*1


/*
Repeating a String n Times: Let's write a function called repeatString that takes two parameters: 
a string str, which is the string to be repeated, and count -- 
a number representing how many times the string s should be repeated, 
e.g.

function repeatString(str, count) {
  // TODO: your code here
}
repeatString('dog', 0); // => ''
repeatString('dog', 1); // => 'dog'
repeatString('dog', 2); // => 'dogdog'
repeatString('dog', 3); // => 'dogdogdog'
Your task is to implement the repeatString function using a while loop.
*/

function repeatString(str,count){
  var result = '';
  while(count>0){
    result = result + str;
    //result += ' '+str; for spaces
    count--;
  } // else {
  return result
}

repeatString('dog',3);
//=> 'dogdogdog'


/*
Modify your sum function from the Basic Requirements section to accept two parameters, start and end: sum should now compute the sum of the numbers from start to end, e.g.

function sum(start, end) {
  // TODO: your code here
}
sum(2, 7); // => 2 + 3 + 4 + 5 + 6 + 7 => 27
sum(3, 5); // => 3 + 4 + 5 => 12
What happens if start is larger than end? Modify sum to check for this case and, when found, swap the start and end arguments.
*/

function sum(start, end){
  var result = 0;
  if (start>end) {
    sum(end,start);
  }
  while (start <= end){
    result += start;
    start++;
  }
  return result;
}
sum(2, 7); // => 2 + 3 + 4 + 5 + 6 + 7 => 27
sum(3, 5); // => 3 + 4 + 5 => 12

/*
Let's pretend for a moment that JavaScript does not have the addition operator + -- instead, it comes with two functions called inc and dec that perform increment and decrement respectively:

// ignore the fact that inc makes use of +
function inc(x) {
  return x + 1;
}

function dec(x) {
  return x - 1;
}
Your task is to write a function called add that takes two numbers as parameters, x and y, and adds them together. The catch is that you can only use inc and dec to accomplish this.
*/

function inc(x) {
  return x + 1;
}

function dec(x) {
  return x - 1;
}

function add(x,y){
  var result = x;
  if(y > 0){
    while(y > 0){
      result = inc(result);
      y--;
    }
    return result;
  }
  while(y > 0){
    result = dec(result);
    y++;
  }
  return result;
}
add(5,6);
//=> 11


/*
Write a function called isEven that, given a number n as a parameter, returns true if that number is even, and false otherwise; however, you need to do this without using the % operator.
*/

function isEven(n){
  var result = n;
  while(n > 1){
    n -= 2;
    result = n;
  }
  if(result === 0){
    return true;
  }
  return false;
}

isEven(932921);
//false

isEven(9382230);
//true

/*
Write a function called multiply that accepts two numbers as parameters, and multiplies them together -- 
but without using the * operator; instead, you'll need to use repeated addition.
*/

function multiply(n1,n2){
  var result = 0;
  while(n2 > 0){
    result += n1;
    n2--;
  }
  return result;
}

multiply(9,8);
//=> 72


multiply(921,0);
//=> 0






