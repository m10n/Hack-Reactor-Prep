//Data Modeling

// Warmup Exercises

// 1. What do we use arrays for? Discuss the purpose of arrays with your partner until you are both confident that you can explain why this construct is useful.

// Provides a way to store and access multiple values (elements) in a single variable, like a list.
// Organizing elements this way makes them easier to access and maniuplate


//2. Create a variable called numbers and assign an array of numbers to it.

var numbers = [1, 1, 2, 3, 5, 8, 13, 21, 34];



//3. Write a function squareAll that takes an array of numbers as a parameter and returns a new array of the input numbers squared.

function squareAll(arr){
	var newArr = [];
	for(var i=0; i<arr.length; i++){
  	newArr[i] = arr[i]*arr[i];
    }
    return newArr;
  }
  squareAll([3, 5, 9]); //=> [ 9, 25, 81 ]



// Garrett's review notes: https://codeshare.io/y8hx3
var garrett = { 
	name: 'Garrett',
	size: 'regular',
	hair: 'exists',
};

//Object.keys(garrett);

var someKey;
for(var iXYZ = 0;iXYZ<Object.keys(garrett).length;iXYZ++){
	someKey = Object.keys(garrett)[iXYZ];
	console.log('Trait: ' + garrett[someKey]);
}

for(var someKeyXYZ in garrett){
	console.log('Trait: ' + garrett[someKeyXYZ]);
}

//Data Modeling notes


// Terms

// Data: Strings, booleans, numbers, arrays and objects.
// Model: A way of representing something as data.
// Instance: A single representation of something as using a model. For our purposes, this will be an object.
// Factory function: A function that outputs instances of a model.




/*
Data Modeling
Player Data
name
number
position

Player Behavior
display player info

etc etc. You don't want to make individual variables for individual players. Create a funciton instead
*/

function makePlayer(name, number, position, battingAvg){
	return {
		name: name,
		number: number,
		position: position,
		battingAvg: battingAvg
	};
}

//this is called a "factory function" - making instances of objects with the same properties but different values
var player1 = makePlayer('Karen', 10, '1B', .204);

function displayPlayer(player){
	return player.number + ' ' + player.position + ' ' + player.name;
}

function updateBattingAvg(player, newAvg){
	player.battingAvg = newAvg;
}



//Data Modeling II: Modeling a collection of entities

//How to display info for each player on the team

function makePlayer(name, number, position, battingAvg){
	return {
		name: name,
		number: number,
		position: position,
		battingAvg: battingAvg;
		hits: 0;
		atBats: 0;
	};
}

var team = [player1, player2, player3];

//display the team roster
function displayRoster(team){
	var display = "";
	for (var i = 0; i < team.length; i++){
		display = display + i + "." + displayPlayer(team[i]) + "\n";
	}
	return display;
}

//add a player to the team

function addPlayer(team,player){
	team.push(player);
}

//remove a player from the team
function removePlayer(team, playerName){
	for (var i=0; i<team.length;i++){
		if(team[i].name === playerName){
			team.splice(i, 1);
			return 'removed ' + playerName;
		}
	}
	return 'Could not find ' + playerName;
}


//figure out which player has the highest batting average
function findBestHitter(){
	var best = team[0];
	for(var i = 1; i < team.length; i++){
		if (team[i].battingAvg > best.battingAvg){

		}
	}
}



function recordAtBat(player, hit){
	if(hit === true){
		player.hits++;
	}
	player.atBats++;
	updateBattingAvg(player,player.hits/player.atBats);
}

// Exercises - Basic Requirements

// Representing Books

// In terms of the properties of books that you thought of, represent the following books as data:

// Harry Potter and the Sorcerer's Stone (J.K. Rowling)
// Snow Crash (Neal Stephenson)
// Structure and Interpretation of Computer Programs (Gerald Jay Sussman, Hal Abelson)

var book1 = {
title: "Harry Potter and the Sorcerer\'\s Stone",
author: "J.K. Rowling",
genre: "young adult",
numberOfPages: 320
};
var book2 = {
title: "Snow Crash",
author: "Neal Stephenson",
genre: "science fiction",
numberOfPages: 420
};
var book3 = {
title: "Structure and Interpretation of Computer Programs",
author: "Gerald Jay Sussman, Hal Abelson",
genre: "computer science",
numberOfPages: 683
};

function makeBook(title, author, pages, genre) {
  return {
    title: title,
    author: author,   //[name1,name2,...]
    genre: genre,
    numberOfPages: pages
  };
}


// Formatting

// Look at one of your book objects in the console. The object inspector is nice, 
// but it would be nice if we could easily view important attributes of a book without 
// having to click on all of its properties with the inspector. 
// Write a function called displayBook that takes a book as an argument, 
// and "pretty prints" the important parts, for example:

var sorcerersStone = {
}
function displayBook(book) {
}
displayBook(sorcerersStone);
// => "Harry Potter and the Sorcerer's Stone, by J.K. Rowling -- fantasy, $24.99"


// The output string above is only an example – the idea is that, given a book object, 
// displayBook returns some string that shows some subset of the information about the 
// book that is deemed important – what is shown is up to you.


function displayBook(book) {
  return "\"" + book.title + "\" is a " + book.numberOfPages + " page " + book.genre + " book by " + book.author + "." 
}



// Handling Multiple Books

// If you haven't already, create an array to hold all of the books 
// that you created above called books.

var books = [book1, book2, book3];

// You have written the function displayBook that can be used to display a single book as a string – 
// write a function displayBooks that, given an array of books, returns a single string 
// consisting of all of the books formatted using the displayBook function you defined before.

// Each book should be numbered, and separated with a newline character 
// so that each book is shown on a separate line in the console. 
// The newline character is specified with a special escaped character in a string:


// Enter the below line into a console
"Hello\nWorld!"; // the \n character is a newline
function displayBooks(books) {
  // ...
}
displayBooks(books);
// => "1. Harry Potter and the Sorcerer's Stone...\n2. Snow Crash, ..."


var books = [book1, book2, book3];

function displayBooks(books){
  var display = "";
  for (var i=0; i<books.length; i++){
    display = display + (i+1) + "." + displayBook(books[i]) + "\n";
	}
  return display;
}
displayBooks(books);

// 1."Harry Potter and the Sorcerer's Stone" is a 320 page young adult book by J.K. Rowling.
// 2."Snow Crash" is a 420 page science fiction book by Neal Stephenson.
// 3."Structure and Interpretation of Computer Programs" is a 683 page computer science book by Gerald Jay Sussman, Hal Abelson.




// Write a function searchBooks that, given a query and an array of books, 
// searches the array of books for "matching" books. You'll need to make a few 
// decisions when implementing a search algorithm, like:

// What fields will be searched? Will you search multiple fields simultaneously 
// (it might be best to start with one field, e.g. title)? 
// Should the search be case-sensitive?

str.toLowerCase()

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase


// How will the search work? Will it only work from the beginning of a field, 
// or from anywhere within?

// A good starting point would be to write a function isMatch that accepts two arguments – 
// the query and a single book – and returns true if the book is a match, and false otherwise. 
// Some Hints:

"Harry Potter".toLowerCase(); // => "harry potter"
"Harry Potter".substr(0, 5); // => "Harry"
var query = "Harry";
"Harry Potter".substr(0, query.length); // => "Harry"
"Harry Potter".indexOf("Pot"); // => 6
"Harry Potter".indexOf("dog"); // => -1


function isMatch(arr, singleBook){
  for(var i=0; i<arr.length; i++){
   if(arr[i].title === singleBook){
    return true; 
   }
  }
  return false;
}


function isMatch(arr, singleBook){
   var title = singleBook.title.toLowerCase();
  if (title.substr(0,arr.length) === arr.toLowerCase()){
    return true;
}
    return false;
}


function searchBooks(books, query) {
  for (var i=0; i<books.length; i++) {
     if (isMatch(books[i], query) === true) {
    	i = books.length;
    	return true;
  		} 
  	}
    return false;
  }


// Write a function removeBook that, given a book's title and an array of books, 
// returns a new array of books that does not contain the book with the provided title.


function removeBook(arr, singleBook){
	for(var i=0; i<arr.length; i++){
		if(array[i].title === singleBook){
			//  (arr[i].title.toLowerCase() === singleBook.toLowerCase()) ?
			arr.splice(i, 1);
		}
	}
	return arr;
}






