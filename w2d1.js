//Array Day

// no warm-ups

// Notes
//Arrays are 0-indexed. first element is at 0.
arr[0];

//The last element can be calculated
arr[arr.length-1];

var arr = [1,8,5,7,5];
return arr[2];
//=>5

//you can assign values to arrays
arr[position] //direct assignment
arr[0] = 'Hello'
arr[99] = 'world'


var arr = [1,1,2,3,5,8,13,21];
arr[2] = 'love';
console.log(arr[2]);
//=> love

//Arrays are objects, not strings
arr = ['hello','world'];
typeof arr
//=>object


var str = 'love';
str[1];
//=>o



/*
Methods
.pop - removes last element
.push - adds elements to end of array
.reverse - reverse elements in an array
.split - splits a string into an array of strings
.shift - remove element from beginning
.unshift - add element to the beginning
.sort
.slice - extracts a copy of some portion of array
.splice - removes indexed elements throughout an array
.concat - add two strings together
.includes - ES6 check for specific value in an array
.join - combines elements & adds a comma between them
.indexOf - gives index of element in array
*/


//pop removes the last element in the array
var arr = [1,1,2,3,5,8,13,21];
var popped = arr.pop()
console.log(arr);
//=>[1,1,2,3,5,8,13];

//you can return the popped element
console.log(popped);
//=>21

//push adds an element to the end of the array
var arr = [1,1,2,3,5,8,13];
arr.push(21, 34);
console.log(arr);
//=>[ 1, 1, 2, 3, 5, 8, 13, 21, 34 ]


//shift - remove element from the beginning

var arr = [1,1,2,3,5,8,13];
var removed = arr.shift();
console.log(arr);
//=>[ 1, 2, 3, 5, 8, 13 ]

console.log(removed);
//=>1

//unshift - add element to beginning
var arr = [ 2, 3, 4, 5];
arr.unshift(1);
console.log(arr);
//=>var arr = [1, 2, 3, 4, 5];

//splice - pop different indices from array
var arr = [1,1,2,3,5,8,13,21];

var spliced = arr.splice(6,7);
console.log(arr);
//=>[ 1, 1, 2, 3, 5, 8 ]

var arr = [1,1,2,3];
var arr2 = [5,8,13,21];
var concated = arr.concat(arr2);
console.log(concated);
//=>[ 1, 1, 2, 3, 5, 8, 13, 21 ]

//slice - extracts a copy of selection of array
var arr = [1,1,2,3,5,8,13,21,34];


var sliced = arr.slice(); // with no parameters
//=>[1,1,2,3,5,8,13,21,34]

var sliced = arr.slice(3);
//=>[ 3, 5, 8, 13, 21, 34 ]

var sliced = arr.slice(0,3);
//=>[ 1, 1, 2 ]




var indexof2 = arr.indexOf(2);
console.log(indexof2);
//=>2


//examples
//while loop
var arr = [];
var i = 0; //counter variable
while (i<10){
	arr.push(i);
	i++;
}
console.log(arr);

//for loop
var arr = [];
//for(counter variable, how long to run the loop,incrementer)
for(var i=0;i<=10;i++){
	arr.push(i);
}
console.log(arr);
//=>[ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]


for(var j=0; j<arr.length;j++){
console.log(arr[j]);
}

//you can increment by >1, e.g. i -=2, i += 2;

var arr = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

for(var evens = 0; evens < arr.length; evens+=2){
	console.log(arr[evens]);
}




function sum(nums){
	var total = 0;
	var i = 0;
	while(i<nums.length){
		total = total + nums[i];
		i++;
	}
	return total;
}

sum([2,5,8,12]);

function sum(nums){
	var total = 0;
	for(var i = 0; i<nums.length;i++){
		total = total + nums[i];
	}
	return total;
}



for (var i = 0; i<array.length; i++){
	array[i] = 'hi';
}
//this will reset every element in the array to 'hi'



//For loop example
//print 1-5 in decending order
for(var num = 5; num > 0; num--){
	console.log(num);
}

// While vs For loop


var currentGen = 1;
var totalGen = 19;
var totalMW = 0;

while(currentGen<5){
totalMW += 62;
console.log("Generator #" + currentGen + " is on, adding 62 MW, for a total of " + totalMW + " MW!");
currentGen++;
}

for(currentGen>4;currentGen<=totalGen;currentGen++){
  totalMW += 124;
  console.log("Generator #" + currentGen + " is on, adding 124 MW, for a total of " + totalMW + " MW!");
}


function numStrings(list) {
  var count = 0;
  for(var i = 0; i<list.length; i++){
    if(typeof(list[i]) ==='string'){
      count++;
    }
  }
  return count;
}



function sum(array){
  var answer = 0;
  for (var i = 0; i < array.length; i++) {
    answer+= array[i];
  }
  return answer;
}

/*
Exercises

Basic Requirements

Creating Arrays

Using the array: ["cat", "fox", "dog", "monkey"], what is the index of:

"dog"?
"monkey"?
"cat"?
*/

var arr = ["cat", "fox", "dog", "monkey"]

var animals = arr.indexOf("dog");
console.log(animals);
//=>2

var animals = arr.indexOf("monkey");
console.log(animals);
//=>3

var animals = arr.indexOf("cat");
console.log(animals);
//=>0


/*
2. Fix the syntax/style in the following arrays:
[ 1, 3 4 7,9, ]
"the""quick""brown","fox" "jumped","over" the lazy, "dog",  ]
[true false,true
*/

[1, 3, 4, 7, 9]
["the","quick","brown","fox","jumped","over","the","lazy","dog"]
[true, false, true]

/*
3. Create arrays in the global scope of your main.js file consisting of strings that represent:

Your favorite TV shows/movies
Names of people you know/care about
Favorite sports/activities
*/

var favShows = ['Westworld', 'Simpsons', 'Silicon Valley']; 
var people = ['Mom', 'Dad', 'Shawn']; 
var favSports = ['sailing', 'cycling', 'skiing'];

/*
Accessing Array Elements

Using the arrays that you created in the last exercise, use the console to access:

First elements,
Last elements,
Other elements!

*/
console.log(favShows[0]);
//Westworld

console.log(favShows[2]);
//Silicon Valley

console.log(favSports[0]);
//sailing

console.log(favSports[2]);
//skiing

/*
2. 
Write a function first that takes an array as an argument and returns the first element in that array.
*/

function first(arr){
return arr[0];
}

first([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]);
//=> 0

/*
3.
Write a function last that takes an array as an argument and returns the last element in the array. Hint: What is the relationship between the index of the last element in the array and the length of the array?
*/

function last(arr){
  return arr[arr.length-1];
}
last([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]);
//=> 144


/*
Modifying Arrays

Using the console, push and unshift, make this array contain the numbers from zero through seven:
*/


var arr = [2, 3, 4];
// your code here
arr.push(5,6,7);
arr.unshift(0,1);
arr; // => [0, 1, 2, 3, 4, 5, 6, 7]

/*
2. What is returned by push? Before throwing this into the console, form a hypothesis about what you think the return value will be:

var arr = [5, 7, 9];
arr.push(6); // => ???
Were you correct? What is the returned by push? Does unshift work in the same way?
*/

var arr = [5, 7, 9];
arr.push(6); // => ???
arr; //=> [ 5, 7, 9, 6 ]

var arr = [5, 7, 9];
arr.unshift(6);
arr; //=> [ 6, 5, 7, 9 ]

/*
We can use the assignment operator (=) to replace elements in arrays with other ones like so:
var animals = ['dog', 'elephant', 'zebra']
// let's replace 'dog' with 'hippo'
animals[0] = 'hippo';
animals; // => ['hippo', 'elephant', 'zebra']
Using the same principle, perform the following:

// 1. Change all odd numbers to be those numbers multiplied by two:
var numbers = [4, 9, 7, 2, 1, 8];
// TODO: your code here
numbers; // => [4, 18, 14, 2, 2, 8]
*/


function multOdd2(array){
  for (var i = 0; i < array.length; i++){
    if (array[i]%2 === 1){
      array[i] *= 2;
    }
  }
  return(array);
}
var numbers = [4, 9, 7, 2, 1, 8];

/*
// 2. Fix the typos by replacing each element with a correctly spelled version
var places = ['snfranisco', 'oacklannd', 'santacrus']
// TODO: your code here
places; // => ['san francisco', 'oakland', 'santa cruz']
*/
var places = ['snfranisco', 'oacklannd', 'santacrus']
places[0] = 'san francisco';
places[1] = 'oakland';
places[2] = 'santa cruz';
places;
//=> [ 'san francisco', 'oakland', 'santa cruz' ]


/*
More Practice

Write a function called nth that accepts an array and an index as parameters, and returns the element at that index.
*/



function nth(array, index) {
  return array[index];
}
var animals = ['dog', 'cat', 'gerbil'];
nth(animals, 2); // => 'gerbil'
nth(animals, 1) === animals[1]; // => true

/*
2. Write a function rest that returns all the elements in the array except for the first one. 
HINT: Read about the slice method on MDN and/or experiment with slice at the console like so:
*/


var arr = [3, 2, 7, 5]
function rest(arr) {
  arr.slice(1);
  return arr;
}
//=>[ 2, 7, 5 ]

/*
3. Write a function butlast that returns all of the elements in the array except for the last one (you may want to use slice for this one as well).
*/

function butlast(arr) {
  return arr.slice(0, arr.length-1);
}

//using pop
var arr = [3, 2, 7, 5];
function butlast(arr) {
  arr.pop();
  return arr;
}

/*
4. Complete the function cons that accepts an element and an array, and returns an array with the element added to the front of the array:
*/

function cons(x, array){
  array.unshift(x);
  return array;
}
/*
5. Complete the function conj that accepts an array and an element, and returns an array with the element added to the end of the array:
*/

function conj(array, x) {
  array.push(x);
  return array;
}

/*
Advanced

1. Without running the below function, use a whiteboard to figure out what it should return by repeatedly expanding function invocations:
*/

/*
2. Using first, rest, conj and/or cons, write functions that accomplish the following:

HINT: After figuring out how the mystery function works above, use it as a reference for how to write this type of function.
*/


//sum all the elements of an array


//rest
var arr = [3, 2, 7, 5]
function rest(arr) {
  arr.slice(1);
  return arr;
}
//=>[ 2, 7, 5 ]


function sum(arr){
	if (arr.length===0) {
    return 0;
  }
  return arr[0] + sum(rest(arr));
}


//Given an array, returns a new array with each element squared


//cons
function cons(x, array){
  array.unshift(x);
  return array;
}

//conj
function conj(array, x) {
  array.push(x);
  return array;
}

//first
function first(arr){
return arr[0];
}



function square(arr) {
  if (arr.length === 0) {
    return [];
  }
  return cons(first(arr)*first(arr),square(rest(arr)));
}

//Given an array of numbers, returns a new array of just the even numbers


function evens(arr) {
  if (arr.length === 0) {
    return [];
  } else if (first(arr)%2 === 0) {
    return cons(first(arr), evens(rest(arr)));
  } else {
    return evens(rest(arr));
  }
}



/*
Exercises
Basic Requirements

1. Write a function sum that computes the sum of the numbers in an array.
*/

//for
function sum(arr){
	var result = 0;
	for(var i = 0; i<arr.length; i++){
		result += arr[i];
	}
	return result;
}

sum([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
//=>55
sum([0, 1, 2]);
//=>3

//while
function sum(arr){
	var result = 0;
	var i = 0;
	while (i<arr.length){
		result += arr[i];
		i++;
	}
	return result;
}
sum([0, 1, 2, 3, 4, 5, 6]);
//=>21
sum([0, 5, 8]);
//=>13


/*
2. Write a function max that accepts an array of numbers and returns the largest number in the array.
*/

//for
function max(arr){
	var largest = arr[0];
	for(var i=0; i<arr.length; i++){
		if(largest < arr[i]){
			largest = arr[i];
		}
	}
	return largest
}
max([0, 1, 2, 3, 4, 5, 6]);
//=>6

//while
function max(arr){
	var largest = arr[0];
	var i = 0;
	while(i<arr.length){
		if(largest < arr[i]){
			largest = arr[i];
		}
		i++;
	}
	return largest
}
max([0, 1, 2, 6934023]);
//=> 6934023

/*
3. Try the following at a console:

"the quick brown fox jumped over the lazy dog".split(" ");
"Hello, world!".split("")
"1,2,3,4,5,6".split(",")
What is returned by split (You can read more about it here), and how does it work?
*/

"the quick brown fox jumped over the lazy dog".split(" ");
/*=> [ 'the',
  'quick',
  'brown',
  'fox',
  'jumped',
  'over',
  'the',
  'lazy',
  'dog' ]
*/

"Hello, world!".split("")
//=> [ 'H', 'e', 'l', 'l', 'o', ',', ' ', 'w', 'o', 'r', 'l', 'd', '!' ]

"1,2,3,4,5,6".split(",")
//=> [ '1', '2', '3', '4', '5', '6' ]


var str = "I love you";

var n = str.split(""); // no white space => [ 'I', ' ', 'l', 'o', 'v', 'e', ' ', 'y', 'o', 'u' ]

var n = str.split(" "); // white space => [ 'I', 'love', 'you' ]

var n = str.split("o"); //=> remove char [ 'I l', 've y', 'u' ]

var n = str.split("",3); //=> [ 'I', ' ', 'l' ]

var n = str.split(" ",3); //=> [ 'I', 'love', 'you' ]

/*
Use split to write a function longestWord that takes a string as an argument and returns the longest word.
*/

//For
function longestWord(str){
	var longest = "";
	var words = str.split(" ");
for (var i=0; i<words.length; i++){
	if(words[i].length>longest.length){
		longest = words[i];
	}
}
return longest;
}
longestWord("long longer longest longerestest");
//=> 'longerestest'

//While
function longestWord(str){
	var longest = "";
	var words = str.split(" ");
	var i = 0;
	while(i < words.length){
		if(words[i].length>longest.length){
			longest = words[i];
			i++;
		}
	}
return longest;
}
longestWord("long longer longest longerestest");
//=> 'longerestest'


/*
4. Write a function remove that accepts an array and an element, and returns an array with all ocurrences of element removed.
*/

function remove(array, element) {
  	var newArr = [];
  for (i=0; i < array.length; i++){
    if (array[i] !== element){
      newArr.push(array[i]);
    }
  }
    return newArr;
}
remove([1, 3, 6, 2, 3], 3);
// => [1, 6, 2]


/*
5. Write a function evens that accepts an array as an argument, 
and returns an array consisting of all of the even numbers in that array.
*/

function evens(array){
	var newArr = [];
	for(i=0;i<array.length;i++){
		if(array[i] % 2 === 0){
			newArr.push(array[i]);
		}
	}
	return newArr;
}

evens([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144])
//=> [ 0, 2, 8, 34, 144 ]

/*
More Practice

1. Write a function called average that takes an array of numbers as a parameter and returns the average of those numbers.
*/

function average(arr){
	var n = 0;
	for(i=0;i<arr.length;i++){
		n += arr[i]/arr.length;
	}
return n;
}
average([5,10,15,20,25]);
//=> 15

average([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 14]);
//=> 28.923076923076923


/*
2. Write a function called min that finds the smallest number in an array of numbers.
*/

//for
function min(arr){
	var smallest = arr[0];
	for(var i=0; i<arr.length; i++){
		if(smallest > arr[i]){
			smallest = arr[i];
		}
	}
	return smallest
}
min([0, 1, 2, 3, 4, 5, 6]);
//=>0

//while
function min(arr){
	var smallest = arr[0];
	var i = 0;
	while(i<arr.length){
		if(smallest > arr[i]){
			smallest = arr[i];
		}
		i++;
	}
	return smallest
}
min([0, 1, 2, 6934023]);
//=>0

/*
3. Write a function shortestWord that works like longestWord, but returns the shortest word instead.
*/

function shortestWord(str){
	var words = str.split(' ');
	var shortest = words[0];
	for (var i = 0; i < words.length; i++){
		if (words[i].length < shortest.length){
			shortest = words[i];
		}
	}
	return shortest;
}

shortestWord("The shortest word in this string should be: a");
//=> 'a'


/* 4.
Write a function countChar that takes two arguments: any string, 
and a character (string of one letter), 
and returns the number of times that the character occurs in the string.
*/

function countChar(str,char){
  n = 0;
  for(var i = 0; i < str.length; i++){
    if(str[i] === char){
      n++;Write a function evenLengthWords that takes an array of strings as an argument, and returns an array of just the words that have an even length.
    }
  }
  return n;
}

countChar("There should be four of this character: !!!!","!");
//=> 4


/* 5.
Write a function evenLengthWords that takes an array of strings as an argument, 
and returns an array of just the words that have an even length.
*/

function evenLengthWords(str){
	var evenWords = [];
	for(var i=0;i<str.length;i++){
		if(str[i].length % 2 === 0){
			evenWords.push(str[i]);
		}
	}
	return evenWords;
}

evenLengthWords(['no','yes','hi','hello']);
//=> [ 'no', 'hi' ]



/*
Advanced

1. Read about the join method on MDN and use it to implement a function that accepts a string as an argument and returns that string reversed.
*/

//.join - combines elements & adds a comma between them


function reverse(str) {
  var arr = str.split("");
  var backward = [];
  for (i=arr.length-1;i>=0;i--) {
    backward.push(arr[i]);
  }
  return backward.join("");
}

reverse("These violent delights have violent ends");
//=> 'sdne tneloiv evah sthgiled tneloiv esehT'






/*
2. Write a function keep that "keeps" certain elements in an array. The function will need to take two arguments, an array, and something else -- the second argument will be what is used to determine which elements to keep.

You should be able to use this function to write evens, evenLengthWords, a hypothetical odds function, or oddLengthWords without changing the keep function.
*/
