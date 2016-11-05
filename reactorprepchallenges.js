// Do the problems in this classroom in the following order:
// Warmups 1 - 13
// Problems 1 - 8
// Dog Walker 1 - 6 *When you start the Dog Walker problem, slack Muhammad! 
// Seating Chart 1 - 4
// Fashion Inventory 1 - 4

// Remember to practice being tidy:
// Proper indentation
// Matching braces
// Good variable naming
// Good function naming
// Variables declared in the right place
// Remember the var keyword
// Return real values, don’t just console.log
// Don't pass in useless arguments


// Warm up 1 - Zero to Twenty
// Write a function called generateZeroToTwenty that returns an array of integers from 0 to 20, inclusive.

function generateZeroToTwenty(){
  var array = [];
  for (var i = 0; i <= 20; i++){
    array.push(i);
  }
  return array;
}
generateZeroToTwenty(); 
//=> [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]





// Warm up 2 - Twenty to Zero
// Write a function called generateTwentyToZero that returns an array of integers from 20 to 0 in descending order.

function generateTwentyToZero(){
  var array = [];
  for(var i = 20; i >= 0; i--){
    array.push(i);
  }
  return array;
}
generateTwentyToZero();
//=> [ 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 ]






// Warm up 3 - Even numbers
// Write a function called generateEvenNumbers that will return an array of even numbers between 0 and 20, inclusive.

function generateEvenNumbers(){
  var array = [];
  for(var i = 0; i <= 20; i++){
    if(i % 2 === 0){
      array++;
    }
  }
  return array;
}
generateEvenNumbers();
//=> [ 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ]






// Warm up 4 - Multiply By Nine
// Write a function called multiplyByNine that accepts an array of integers. It returns an array-of-arrays containing the original integers and each integer multiplied by 9.
// For example, given the input array [1,2,3], it should return [[1,9],[2,18],[3,27]].

function multiplyByNine(arrayOfNumbers) {
	for (var i = 0; i < arrayOfNumbers.length; i++) {  
		arrayOfNumbers[i] = [arrayOfNumbers[i], (arrayOfNumbers[i] * 9)];   
	}  
	return arrayOfNumbers; 
}
multiplyByNine([1,2,3]); //=> [[1,9],[2,18],[3,27]].

//or

function multiplyByNine(arrayOfNumbers) {
	var result = [];
	for (var i = 0; i < arrayOfNumbers.length; i++) {
		result.push([arrayOfNumbers[i], arrayOfNumbers[i] * 9]);
	}
	return result;
}
multiplyByNine([1,2,3]); //=> [[1,9],[2,18],[3,27]].





// Warm up 5 - Add Arrays
// Write a function that adds 2 given arrays of numbers, of the same length.
// Example: sumArrays([1,2,3], [4,5,6]) ⇒ [5,7,9]

function sumArrays(array1, array2){
	var result = [];
	for( var i = 0; i < array1.length; i++){
		result[i] = array1[i] + array2[i];
	}
	return result;
}
sumArrays([1,2,3], [4,5,6]); //=> [ 5, 7, 9 ]






// Warm up 6 - Max Value in Array
// Write a function that finds the maximum value in a given array. Do not use Math.max

function findMax(array){
  var maxValue = array[0];
  for(var i = 0; i < array.length; i++){
    if(maxValue < array[i]){
      maxValue = array[i];
    }
  }
  return maxValue;
}
findMax([0, 1, 2, 3, 4, 5, 6,]); //=>6







// Warm up 7 - Average values
// Write a function that averages a given array of numbers.

function arrayAvg(array){
  var avg = 0;
  for(var i = 0; i < array.length; i++){
    avg += avg + array[i] / array.length;
  }
  return avg;
}
arrayAvg([10,15,20,25,30]); //=>20






// Warm up 8 - Alternate operators
// Write a function that adds and subtracts a given array of numbers in alternation and returns the result. For example, given [1,2,3,4,5], it should return -1, because 1+2-3+4-5=-1.

function addAndSubtract(array){
  var result = array[0];
  for (var i = 1; i < array.length; i++){    
    if(i % 2 === 0){
      result -= array[i];
    } else {
    result += array[i];
    }
  }
  return result;
}
addAndSubtract([1,2,3,4,5]); //=> -1







// Warm up 9 - Line o' Asterisks
// Write a function that returns a horizontal line of asterisks of a specified length.
// Don't just write this out to the log -- actually return the string.

function asterLine(count){
  var asterisks = '';
  for(var i = 0; i < count; i++){
    asterisks += '*';
  }
    return asterisks;
}
asterLine(42);
//=> '******************************************'





// Warm up 10 - Draw a Right Triangle
// Write a function called drawTriangle that returns the following string. Feel free to debug-print using console.log, but make sure that the function actually returns a string. 
// Note that in a string, the character for a carriage return (the equivalent of hitting the “Enter” or “Return” key) is “\n”.
// #
// ##
// ###
// ####
// #####
// ######
// #######
function drawTriangle() {
	var rows = 7;
	var hash = '#';
	var result = '#';
	for(i = 1; i < rows; i++){
		hash += '#';
		result += '\n' + hash;
	}
	return result;
}  
console.log(drawTriangle());
//=>
// #
// ##
// ###
// ####
// #####
// ######
// #######

//or

function hash(n) {
  if(n === 0) {
  	return '#';
  }
  return '#' + hash(n - 1);
}

function drawTriangle() {
	var result = '';
	var rows = 7;
	for(var i = 0; i < rows; i++) {
		result += hash(i) + '\n';
	}
  return result;
}
console.log(drawTriangle());
//=>
// #
// ##
// ###
// ####
// #####
// ######
// #######






// Warm up 11 - Animal Fetcher
// Given this object: 
var animals = { 
  mammals:['bears','lions','whales','otters'], 
  birds:['penguins','ducks','swans','chickens'], 
  cats:['panther','mountain lion','leopard','snow tiger'], 
  insects: ['flea','mosquito','beetle','fly','grasshopper'],
};

// Create a function called getFirstAnimals that returns an array of all the first animals in the object. 
// Example: [‘bears’,’penguins’,panther’,’flea’]

function getFirstAnimals(animals){
	var result = [];
	for(var key in animals){
		result.push(animals[key][0]);
	}
 	return result;
 }
getFirstAnimals(animals); //=> [ 'bears', 'penguins', 'panther', 'flea' ]


// Also create a function called getLastAnimals that returns an array of all the last animals in the object. 
// Example: [‘otters’,’chickens’...etc]

function getLastAnimals(animals){
	var result = [];
	for(var key in animals){
		result.push(animals[key][animals[key].length-1]);
	}
 	return result;
 }
getLastAnimals(animals); //=> [ 'otters', 'chickens', 'snow tiger', 'grasshopper' ]








// Warm up 12 - FizzBuzz
// Write a function called generateFizzBuzz that returns an object with all the numbers from 1 to 100 as keys and values, with two exceptions. For numbers divisible by 3, the value should be "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), the value should be "Buzz" instead.
// Example: {0:0,1:1,2:2,3:’Fizz’,4:4,5:’Buzz’...}
// When you have that working, modify your function to show "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still show "Fizz" or "Buzz"for numbers divisible by only one of those). 
function generateFizzBuzz(){
	var result = {0:0};
	for (i = 1; i <= 100; i++){
		result[i] = i;
		if(result[i] % 3 === 0 && result[i] % 5 === 0){
			result[i] = 'FizzBuzz';
		} else if(result[i] % 3 === 0){
			result[i] = "Fizz";
		} else if(result[i] % 5 === 0){
			result[i] = "Buzz";
		}
		result[i];
	}
	return result;
}
generateFizzBuzz();






// Warm up 13 - Organize currencies
// In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:
// 1p piece
// 2p piece
// 5p piece
// 10p piece
// 20p piece
// 50p piece
// £1 (100p)
// £2 (200p)
// Write a function called organizeCurrencies that return an array of objects where the first object contains all the pieces and the second contains all the pounds. The value show be the number and the key should be the name of the currency.

// Sample input: ['1p','2p','5p', '5p','10p','20p','50p','£1', '20p','50p','£1','£2']
// Output: [ {10p: 1, 1p: 1, 20p: 2, 2p: 1, 50p: 2, 5p: 2}, {£1: 2, £2: 1} ]

var input = ['1p','2p','5p','5p','10p','20p','50p','£1','20p','50p','£1','£2'];

function organizeCurrencies(input) {
	var result = [];
	var pence  = {};
	var pounds = {};
	for (var i=0; i < input.length; i++) {
		if (input[i][input[i].length-1] === 'p') {
			if (pence[input[i]] === undefined) {
				pence[input[i]] = 1;
			}
				pence[input[i]] += 1;
		}
		else if (input[i][0] === ('£')) { 
			if (pounds[input[i]] === undefined) {
				pounds[input[i]] = 1;
			}
			pounds[input[i]] += 1;
		}
	}
	result.push(pence, pounds);
	return result;
}
organizeCurrencies(input); //=> 
// [ { '1p': 2, '2p': 2, '5p': 3, '10p': 2, '20p': 3, '50p': 3 },
//   { '£1': 3, '£2': 2 } ]





