// Live timed individual challenges - Weekly Challenge 2

// Using your knowledge of JavaScript data types (i.e. numbers, strings, booleans, arrays and objects), 
// represent our solar system as data (hint: the link is to a Wikipedia article – you should use it). 

//You can include as many attributes as you like, but the following are required:

// Age of the Solar System
// Distance from the center of the galaxy
// Number of known comets
// The Planets
// Name
// Size (in Earth-masses)
// Distance of each from sun
// Number of known satellites (orbiting bodies, e.g moons)


	var solarSystem = {
		name: 'Solar System',
		age: '4.568 billion years',
		distGalCenter: '27,000 ± 1,000 ly',
		comets: 3406,
	planets: [  //I started this as a makePlanet factory function but realized that's probably not what this calls for
	{   name: 'Mercury',
	sizeEarthMasses:  .055,
	distFromSun: 29000000, // in AU
	satellites: 0
	},
	{   name: 'Venus',
	sizeEarthMasses: .815,
	distFromSun: 67000000,
	satellites: 0
	},
	{   name: 'Earth',
	sizeEarthMasses:  1,
	distFromSun: 93000000,
	satellites: 1
	},
	{   name: 'Mars',
	sizeEarthMasses:  .107,
	distFromSun: 143000000,
	satellites: 2
	},
	{   nameInMasses: 'Jupiter',
	sizeEarthMasses: 317.8,
	distFromSun: 483800000,
	satellites: 67
	},
	{   name: 'Saturn',
	sizeEarthMasses:  95.159,
	distFromSun: 888200000,
	satellites: 62
	},
	{   name: 'Uranus',
	sizeEarthMasses:  14.536,
	distFromSun: 1787000000000,
	satellites: 27
	},
	{   name: 'Neptune',
	sizeEarthMasses:  17.147,
	distFromSun: 2795000000000,
	satellites: 14
	}
	]
	};
	console.log(solarSystem);




// Complete the below function called range that takes two integers as parameters, start and end, 
// and returns an array containing all the whole numbers between them starting with start and up to end 
// (you can use a for loop, while loop, each, or repetition with function invocation). 


function range(start, end){
	var arr = [];
	for(i=start; i<end; i++){
		arr.push(i);
	}
	return arr;
}

range(0, 4); // => [0, 1, 2, 3]
range(2, 7); // => [2, 3, 4, 5, 6]
range(10, 10); // => []
range(10, 2); // => []



// Given the following array of people, write a function that, when passed people as a parameter, returns the person 
// (that is, your function should return an object) with the longest name (first, middle & last).

// HINT: It might be helpful to have a fullName function that, 
// when given a person as a parameter, returns a person's full name.


var people = [
  {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
  {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
  {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
  {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
  {name: {first: "Louis", last: "Reasoner"}, age: 21}
];


function fullName(people){
	return people.name.first + ' ' + people.name.middle + ' ' + people.name.last;
}

function longestName(people){
	var count = 0;
    var longestName = {};
    for (var i=0; i <people.length; i++){
    	if (fullName(people[i]).length > count){
    		count = people[i].length;
    		longestName = people[i];
    	}
    }
    return longestName;
}

longestName(people);
//=> { name: { first: 'Alyssa', middle: 'P.', last: 'Hacker' },
