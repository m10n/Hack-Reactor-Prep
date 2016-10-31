var x;
x = 'hello';

var y = x;
x = 'world';

var arr = [];

arr[0] = 'hello';

var obj = {}

obj.hello = 'world';
obj.population = 7349472099;

arr[0] = 'population';
arr[i] = obj.population;

//Object review

var josh = {
  name: { first: "Josh", last: "Lehman" }, // nesting is ok!
  age: 26, // key-value pairs are separated with commas
  gender: "male",
  programmer: true
}
josh.age; // dot notation
josh.name.first;
josh["age"]; // bracket notation
josh["name"]["first"];
josh.name.first = "Joshua"; // we can reassign values!
// Used to talk about entities
// Comprised of key,value pairs
// keys are usually represented as strings
// Combine many kinds of data (hence, compound)
// Access values by key:
// Dot Notation: josh.age, Bracket Notation: josh["age"]


var josh = {
  name: {
    first: "Josh",
    last: "Lehman"
  },
  age: 26,
  gender: "male",
  programmer: true,
  favoriteTVShows: ["Fargo", "Breaking Bad", "Battlestar Galactica"],
  pets: [{type: "cat", name: "Pal", age: 3, biochipped: true, color: "orange"}]
}
josh.name.last; // "Lehman"
josh.favoriteTVShows[0]; // "Fargo"
josh.pets[0].type; // "cat"


// Functions with data structures...
function makePerson(name, age, cats) {
  var person = {name: name, age: age, cats: cats};
  return person;
}
var johnDoe = makePerson("John Doe", 35, ["Fluffy"]);

// ... will often receive them as arguments...
function aboutPerson(person) {
  return person.name + " is " + person.age +
    " years old, and has " + person.cats.length + " cats.";
}
aboutPerson(johnDoe);

// ... and can manipulate them!
function hadBirthday(person) {
  person.age = person.age + 1;
  return person;
}
hadBirthday(johnDoe);



//Warmup problems

Represent at least two of the following using an object (create variables with objects as their values):

Your car (or a favorite model)
The system specs of your computer (RAM, CPU, storage, etc.)
Your pet
Another person that you know
An activity that you enjoy
It will help to first think about the various aspects (i.e. properties, attributes) that are important to each of these things.

var laptop = {
	manufacturer: 'Apple',
	model: 'MacBook Pro (Retina, 15-inch, Mid 2015)',
	os: 'OS X El Capitan 10.11.6',
	memoryInGB: 16,
	storageInGB: 256
}


var cat = {
	name: 'Blackjack',
	age: 4,
	sex: 'male',
	attire: 'Tuxedo',
	hobbies: 'sleeping forever, judging you silently, spazzing out for no reason' 
}

//Write a function called squareNumericValues that takes an object as a parameter 
//and returns an object with all of the numeric values in the object squared, e.g.


function squareNumericValues(obj){

}










function squareNumericValues(obj) {
  // TODO: Your code here
}
squareNumericValues({a: 4, b: 7, c: 2}); // => {a: 16, b: 49, c: 4}
squareNumericValues({name: "Phuong", age: 25}); // => {name: "Phuong", age: 625}


function squareNumericValues(obj) {
  var total = 0;
  for(var i = 0; i < obj.length; i++){
    if(typeof obj[i] === 'number'){
      total = total + obj[i];
    }
  }
  return total/obj.length;
}
squareNumericValues({a: 4, b: 7, c: 2}); // => {a: 16, b: 49, c: 4}
squareNumericValues({name: "Phuong", age: 25}); // => {name: "Phuong", age: 625}




function squareNumericValues(obj) {
	var obj2 = {};
  for (var key in obj)
}

function squareNumericValues(obj){
	for (var key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= obj[key]; }
  } 
  return obj; 
} 
  


  function squareNumericValues(obj){
  var squaredObj = {};
  
	for (var keys in obj){
    if (typeof obj[keys] === "number"){
      squaredObj[keys] = obj[keys] * obj[keys];
    } else {
      squaredObj[keys] = obj[keys];
    }
  }
  
  return squaredObj;
}

 //Create a new object to retunr 
function squareNumericValues(obj) {
  var newObject = {};
  for (var key in obj) {
    if (typeof obj[key] === "number") {
     	newObject[key] = Math.pow(obj[key], 2);
  	} else {
    	newObject[key] = obj[key]
  	}
  } 
  return newObject;
}
squareNumericValues({a: 4, b: 7, c: 2}); // => {a: 16, b: 49, c: 4}
squareNumericValues({name: "Phuong", age: 25}); // => {name: "Phuong", age: 625}
//

//2
function squareNumericValues(obj){
  for(var key in obj){
    if(typeof obj[key] === "number"){
      obj[key] =  obj[key]**2;
  }
  }
  return obj;
 
}

squareNumericValues({a: 4, b: 7, c: 2});



// One observation to make when writing this function is that you'll need to only 
// square the values that are actually numbers -- notice how in the second example 
// invocation above (squareNumericValues({name: "Phuong", age: 25})) 
// the value "Phuong" is unchanged because its value is a string.

// To handle this, you will need to use the typeof operator to determine each value's type. 
// Enter the following into a console to get an idea of how typeof works:


typeof 1; // => "number"
typeof "hello"; // => "string"
typeof true; // => "boolean"

















