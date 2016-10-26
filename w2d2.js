//your code here!


//Warm up

/*
2. The following function is supposed to compute the sum of the numbers from 0 to n, but is currently broken (in multiple ways) -- fix it so that it works correctly.

  function sum(n) {
  var result;
  while (n > 0) {
    result = n + n;
    n = n + 1;
  }
}
*/


function sum(n) {
  var result = 0;
  while (n > 0) {
    result += n;
    n -= 1;
  }
  return result;
}

//alt
function sum(n){
	if (n > 0){
		return n + sum(n-1);
	} else {
		return 0;
	}
}

sum(5);
//=>15



//3. The power_iter function from the lecture looks like this:

function power_iter(base, exponent) {
  var result = 1;
  while (exponent > 0) {
    result = result * base;
    exponent = exponent - 1;
  }
  return result;
}


/*
The power_iter function counts down from exponent, iterating as long as exponent is greater than 0. Change the implementation so that power_iter counts up from 0 to exponent.
*/


function power_iter(base, exponent) {
  var result = 1;
  var i = 0;
  
  while (i < exponent) {
    result *= base;
    i++;
  }
  
  return result;
}
power_iter(4,3);
//=>64




/* Notes
Objects

*/
if (user['city']) === 'Oakland, CA' && user['instrument'] === 'saxophone'){
	
}

user['firstName']

//use curly brackets and semicolon
//labels are keys or properties

var user = {
	firstName: 'Morgan',
	lastName: 'Missen',
	homeTown: 'Flint, Michigan',
};

//when defining objects, define each on its own line

//NO: var bad = {a: 1, b: 2};
//YES:
var good = {
	a: 1,
	b: 2
};
//implicit 

good['a'] //string literal

Bracket notation
//resembles the way we access elements in an array
user['name'] // string literal name property defined in the user object


Dot notation
//slightly shorter way to access the same properties on an object, used more often
user.name //key


good[c]
//reference error

var x = 'a'; good[x]
//a (replaces x)

good['a'];
//1


var user = {
	firstName: 'Morgan',
	lastName: 'Missen',
	homeTown: 'Flint, Michigan',
	age: '30',
};

user.firstName;
//Morgan

user['homeTown'];
//Flint, Michigan

var someProperty = 'age';
user[someProperty];
//30

user.someProperty
//undefined (using variables only works in bracket notation)


user.someProperty === user['someProperty'];
//true

/*
Changing objects in JavaScript
*/

var user = {
	firstName: 'Morgan',
	lastName: 'Missen',
	homeTown: 'Flint, Michigan',
	age: '30',
};

//use assignment operator for both bracket/dot notation
user.lastName = 'Simpson';
user['age'] = '33';


var puppyName = '...'
puppy.name = '...'


puppy.biochipped = true;
puppy;
/*{ 
name: ‘Gatsby’, 
age: 1, 
breed: ‘Corgi’, 
biochipped: true 
};
*/

/* Objects don't have an order so the for in
loop iterates over each property of an object.
The variable 'key' represents the current value
*/
var puppy = {
	name: 'Blackjack',
	age: 1,
	breed: 'beagle'
};

var puppyValues = [];

for (var key in puppy){
	puppy.Values.push(puppy[key]);
}

for (var someVariableName in puppy){
	puppy.Values.push(puppy[someVariableName]);
}
//no quotes in bracketed key


puppyValues.push(puppy['age'])
puppyValues.push(puppy['name'])

puppyValues;
//



var puppy = {
	name: 'Blackjack',
	age: 1,
	breed: 'beagle'
};

var puppyValues = [];

for (var key in puppy){
	puppyValues.push(puppy[key]);
}

puppyValues;

//=> [ 'Blackjack', 1, 'beagle' ]


var kitty = {
	name: 'Mittens',
	age: 3,
	enjoys: 'string',
};


kitty.'name'; // Error
kitty.name; //'Mittens'

var x = 'age';
kitty.x; // implicit string literal, replaceable with kitty['x']
//=> undefined

kitty[x];
//=>3

var y = kitty.age;
// y === 3


var y = kitty.enjoys;
// y === 'string'

//using a for-in loop, build an array of keys for kitty object

var kittyKeys = [];

for(var someKey in kitty){
	kittyKeys.push(someKey);
}
kittyKeys;

var kittyKeys = [];
for(var someKey in kitty){
	kittyKeys.push(kitty[someKey]);
}
kittyKeys;

//=> [ 'Mittens', 3, 'string' ]

/*
Garrett's lecture notes: */

var kitty = {
	name: 'Mittens',
	age: 3,
	enjoys: 'string',
	isLarge: false,
	kittyFriend: {
		name: 'KittyFriend',
		age: 4,
	},
	someKey: 'anotherVal',
};
kitty.kittyFriend.name;
//=> 'KittyFriend'


var kittyFriend2 = {
	name: 'Fluffy',
};
kittyFriend2.name;
//=> 'Fluffy'



var kittyFriend2 = {
	name: 'Fluffykins',
};
var kitty = {
	name: 'Mittens',
	age: 3,
	enjoys: 'string',
	isLarge: false,
	kittyFriend: {
		name: 'KittyFriend',
		age: 3,
		},
	anotherFriend: kittyFriend2,
};

var y = kitty.enjoys; // y === 'string'
var y = 'string'; // same as ^^^^

kitty.kittyFriend.name; //'KittyFriend'

kittyFriend2.name; // 'Fluffykins'
//kitty.'name'; //Error
kitty.name; // 'Mittens'
var x = 'age';
kitty.x; // Replaceable with kitty['x']
kitty.x; // undefined
kitty[x]; // 3


var kittyKeys = [];
for(var someKey in kitty) {
	kittyKeys.push(kitty[someKey]);
}
kittyKeys;




var computer = {
  brand: "Apple",
  year: 2014,
  model: "MacBook Pro",
  size: "15-inch",
  specs: {
    processor: "2.3GHz Intel Core i7",
    memory: "16 GB 1600 MHz DDR3",
    graphics: "Intel Iris Pro 1536 MB"
  }
}

//need two key value pairs
var obj = {};
obj.hello = "world";
obj["number"] = 25;







function fullName(person){
	return person.name.first + " " + person.name.middle + " " + person.name.last;
}

var people = [
  {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
  {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
  {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
  {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
  {name: {first: "Louis", last: "Reasoner"}, age: 21},
  {name: {first: "Brendan", middle: "S.", last: "Mok"}, age: 24}];

function peopleNames(people){
  var names = [];
  
  for (var i = 0; i < people.length; i++){
    names.push(fullName(people[i]));
  }
  
  return names;
}

console.log(peopleNames(people));


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





console.log(peopleNames(people));



var people = [
  {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
  {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
  {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
  {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
  {name: {first: "Louis", last: "Reasoner"}, age: 21},
  {name: {first: "Brendan", middle: "S.", last: "Mok"}, age: 24}
];



function averageAge(people){
  var ages = 0;
  
  for (var i = 0; i < people.length; i++){
    ages += people[i].age/people.length;
  }
  
  return ages;
}

console.log(averageAge(people)) ==> 31.666666666666668;


averageAge(people);


var montgomery = {
	fiancee: 'Morgan',
	fiance: 'Shawn',
	cat: 'Blackjack',
};

Object.keys(montomery);
//['fiancee','fiance','cat']
Object.values(montgomery); // not available yet

var values = [];
for(var key in montomery){
	values.push(montgomery[key]);
}

values; // ['Morgan','Shawn','Blackjack']
function recursiveObjDotValues(montgomery,keyArray){
	if(keyArray.length === 0){
		return [];
	}
	return recursiveObjDotValues(keyArray.slice(1)).concat([montgomery]keyArray[0]]]);
}


/*Exercises

Basic Requirements

Syntax & Style

Fix the syntax & style issues with the three objects below:
*/

{firstName "Josh", lastname: "Lehman" }

{
  firstName: "Josh", 
	lastName: "Lehman" 
}


{a: 1, b:2 c: 3 d 4}

{
 a: 1, 
 b: 2, 
 c: 3, 
 d: 4
}

{
    animal: "dog"
    noise: "bark",
        age: 3,
  type "Labrador"
     color: "Yellow",
}


{
  animal: "dog",
   noise: "bark",
     age: 3,
    type: "Labrador",
   color: "Yellow"
}

/*
Creating Objects

1. Create an object that represents you. It should contain your first name, last name...


2. Add three more key/value pairs to your object that represent other attributes of yourself.

The values in an object can be objects themselves, and in fact, this is a very common pattern. For example, consider the following object that represents a computer:
*/
var computer = {
  brand: "Apple",
  year: 2014,
  model: "MacBook Pro",
  size: "15-inch",
  specs: {
    processor: "2.3GHz Intel Core i7",
    memory: "16 GB 1600 MHz DDR3",
    graphics: "Intel Iris Pro 1536 MB"
  }
}
/*
You should notice that the specs key in the computer object is an object itself! We could access information about the processor using dot-notation like so:
*/
computer.specs.processor; // => "2.3GHz Intel Core i7"
/*
Change your object to have a name key, the value of which is an object – this object should have first, last and middle keys containing your first, last, and middle names respectively (make sure to remove the firstName and lastName keys that you added before). You should be able to access your last name afterwards like so (assuming your object is called you):
*/
you.name.last; // => YOUR LAST NAME
/*
Look up your favorite TV show on IMDB, and make an object that represents some aspects of that movie, e.g.:

Title
Director
Year released
Rating
Actors
HINT: Most movies have multiple actors. What data-structure do we use to represent a collection of similar things?
*/

var user = {
  hometown: "Flint, Michigan",
  city: "San Francisco, California",
  favoriteTVShow: {
    title: "Breaking Bad",
    director: "Vince Gilligan",
    yearReleased: 2008,
    rating: 9.5/10,
    actors: ["Bryan Cranston", "Aaron Paul", "Anna Gunn"]
  },
  birthday: "July 25",
  name: {
    first: "Morgan",
    middle: "Jane",
    last: "Missen"
  }
}

/*
Creating New Key/Value Pairs

Perform these exercises in a console!

1. Create a new empty object in your console called obj like this:

2. Add a new key/value pair to the object obj by assigning a new value to a new key like so:

3. Now, check the value of obj in the console and ensure that it has the two key/value pairs added above. This is how we create new key/value pairs in existing objects.
*/


var obj = {};


var obj = {};
obj.hello = "world";
obj["number"] = 25;

user.favoriteColor = "blue";


/*
Accessing Values by Key

1. Fix the attempts to access values in the person object:
*/

var key = "name";
var person = {
    name: "Alyssa P. Hacker",
    age: 26,
    hometown: "somewhere"
};
person["age"]; // => 26
person.name; // => "Alyssa P. Hacker"

/*
Write a function fullName that takes a person object as an argument, and returns that person's full name as a string. By person object, we mean an object that has the structure of the object you created to represent yourself above, for example:
*/


var user = {name: {first: "Morgan", middle: "Jane", last: "M"}, age: 33};

function fullName(person){
	return person.name.first + " " + person.name.middle + " " + person.name.last;
}

//3. What happens if you pass a person object to fullName that doesn't have a middle name?

fullName({name: {first: "John", last: "Doe"}}); // => "John Doe"
/*
Your fullName function should work correctly regardless of whether or not the person has a middle name -- if it doesn't produce the output shown above when given the object {name: {first: "John", last: "Doe"}}, fix it so that it does.
*/


function fullName(person) {
  if (person.name.middle === undefined){
    	return person.name.first + " " + person.name.last;
  }
	return person.name.first + " " + person.name.middle + " " + person.name.last;
};

/*
4. We often deal with arrays of objects; below is an example of an array of objects, where each object represents a person:
*/

var people = [
  {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
  {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
  {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
  {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
  {name: {first: "Louis", last: "Reasoner"}, age: 21},
  {name: {first: "Brendan", middle: "S.", last: "Mok"}, age: 24}
];



//2. Write a function that, when passed an array of people (person objects) as an argument, returns an array of their full names. Can you make use of your fullName function here?


function peopleNames(people){
  var names = [];
  
  for (var i = 0; i < people.length; i++){
    names.push(fullName(people[i]));
  }
  
  return names;
}

console.log(peopleNames(people));


//3. Write a function that finds the average age of the people array.

function averageAge(people){
  var ages = 0;
  
  for (var i = 0; i < people.length; i++){
    ages += people[i].age;
  }
  
  return ages / people.length;
}

console.log(averageAge(people)) ==> 31.666666666666668;

//4. Write a function that, when given people and an age as arguments, returns an array of just the people that are older than the specified age.


function specificAge(people, age){
  var names = [];
  
  for (var i = 0; i < people.length; i++){
    if (people[i].age > age){
      names.push(people[i].name);
    }
  }
  
  return names;
}


/*
Iterating over Keys & Values

1. The following object has a number of key/value pairs that need to be removed:
The function clean should accept an object as an argument and return a new object that has all of the key/value pairs of its parameter except for those that begin with _.
*/

var dirtyObject = {
  _fht: 192492,
  name: "Alyssa P. Hacker",
  age: 26,
  _byz: 939205,
  _ttrs: 510852
}

// different solution ideas, need to go over these

function clean(obj){
  var cleanObj = {};
  
  for (var key in obj){
		if (key[0] !== "_"){
      cleanObj[key] = obj[key];
    }
  }
  
  return cleanObj;
}

clean(dirtyObject); // => {name: "Alyssa P. Hacker", age: 26}

function clean(obj) {
  var newObj = obj;
  for (var key in newObj){
   if (key[0] === "_") { 
    delete newObj[key];
   }
  }
  return newObj;
}
clean(dirtyObject); // => {name: "Alyssa P. Hacker", age: 26}
  

function clean(dirtyObject) {
	var cleanObject = {
    name: dirtyObject.name, 
    age: dirtyObject.age
  }
  return cleanObject; 
}


function clean(obj) {
	var x = Object.keys(obj);
  var y = obj[key];
  var cleanObject = {};
  for (i = 0; i < x.length; i++) {
  	if (x[0] !== '_') {
  		cleanObject.x[i] = y[i];
  	}
  } return cleanObject;
}


function clean(obj) {
	var newObj = {};
	
  for(var key in obj){
		 if(key[0] != "_"){
		 	newObj[key] = obj[key];
		 }
  }
  return newObj;
}
clean(dirtyObject)
  // ...

  
  
clean(dirtyObject); // => {name: "Alyssa P. Hacker", age: 26}



/*
2. Write a function removeOddValues that takes an object as an argument and returns an object with all key/value pairs removed for which the value holds an odd number. You'll need to use the `typeof` operator to first check that the values are numbers:
*/

typeof "Hello"
typeof 3


function removeOddValues(obj){
	for (var key in obj){
  	if(typeof obj[key] === "number" && obj[key]%2 === 1){
  		delete obj[key];
 }
}
return obj;
}

/*
Write a function countCharacters that, when given a string as an argument, returns an object containing counts of the ocurrences of each character in the string.

function countCharacters(s) {
  // ...
}
countCharacters("hello"); // => {"h": 1, "e": 1, "l": 2, "o": 1}
HINT: You will want to make use of the string method split. Try \"hello".split("") at a console to see how it works.
*/
//didn't get this far
//https://learn.makerpass.com/groups/reactor-prep-am-20161017/courses/reactorcore/reactorprep?id=lessons%2Fintro-objects



/*
Advanced

The function Object.keys returns an array of an object's keys. Experiment with it at the console like this:

Object.keys({a: 1, b: 2});

Using this property, write versions of the above functions using repetition through function invocation (i.e. recursion)

*/

// This is Garrett's code from lecture

// //https://codeshare.io/kRGoK
var garrett = {
	name: 'Garrett Holmes',
	age: 29,
	hair: 'large'
};

Object.keys(garrett); // ['name','age','hair']
// Object.values is brand new and unavailable in DevConsole
Objects.values(garrett); // ['Garrett Holmes',29,'large']

Object.keys(garrett).slice(1); // ['age','hair']

var values = [];
for(var key in garrett){
	values.push(garrett[key]);
}
values; // ['Garrett Holmes',29,'large']

[].concat(['a']); // ['a']
['a'].concat(['b']); // ['a','b']
[].push(['a']); // [ ['a'] ]

var array = [1,2,3];
array.slice(1); // [2,3]
array.slice(1,2); // [2]


function recursiveObjDotValues(garrett,keyArray){
	if(keyArray.length === 0){
		return [];
	}
	return recursiveObjDotValues(garrett,keyArray.slice(1)).concat([garrett[keyArray[0]]]);
}
recursiveObjDotValues(garrett,Object.keys(garrett));



//More of Garrett's code from lecture

var kittyFriend2 = {
	name: 'Fluffykins',
};
var kitty = {
	name: 'Mittens',
	age: 3,
	enjoys: 'string',
	isLarge: false,
	kittyFriend: {
		name: 'KittyFriend',
		age: 3,
		},
	anotherFriend: kittyFriend2,
};

var y = kitty.enjoys; // y === 'string'
var y = 'string'; // same as ^^^^

kitty.kittyFriend.name; //'KittyFriend'

kittyFriend2.name; // 'Fluffykins'
//kitty.'name'; //Error
kitty.name; // 'Mittens'
var x = 'age';
kitty.x; // Replaceable with kitty['x']
kitty.x; // undefined
kitty[x]; // 3


var kittyKeys = [];
for(var someKey in kitty) {
	kittyKeys.push(kitty[someKey]);
}
kittyKeys;
