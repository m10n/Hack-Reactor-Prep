/*
Write a function sameLength that accepts two strings as arguments, 
and returns true if those strings have the same length, and false otherwise.
*/
function sameLength (string1, string2) {
  if (string1.length === string2.length) {
    return true;
  } else {
  return false;
  }
}
sameLength("hello", "hi");
// => false

sameLength("yo", "hi");
// => true

/*
 Write a function passwordLongEnough that accepts a "password" as a parameter and returns true if that password is long enough -- you get to decide what constitutes long enough.
*/
function passwordLongEnough (password) {
  if (password.length>=7) {
    return true;
  } else {
    return false;
  }
}
passwordLongEnough("secretword");
//=> true
passwordLongEnough("secret");
//=> false

/*
Conditionals: if

Write a function bouncer that accepts a person's name and age as arguments, and returns either "Go home, NAME.", or "Welcome, NAME!" 
(where NAME is the parameter that represents the person's name) depending on whether or not the person is old enough to drink.

*/

function bouncer (name, age) {
  if (age >= 21) {
    return "Welcome, " + name;
  }
  else {
    return "Go home, " + name;
  }
}

bouncer("Jordan", 18);
//=> 'Go home, Jordan'

/*
Write a function max that takes two numbers as arguments, and returns the larger one. 
*/

function max (num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num2 > num1) {
    return num2;
  } else {
    return "numbers are equal";
  }
}
max(82910,2);
//=> 82910
max(47,47);
//=> 'numbers are equal'

/*
Write a function min that takes two numbers as arguments, and returns the smaller one.
*/

function min (num1, num2) {
  if (num1 < num2) {
    return num1;
  } else if (num2 < num1) {
    return num2;
  } else {
    return "numbers are equal";
  }
}
min(82910,2);
//=> 2
min(47,47);
//=> 'numbers are equal'



/*
Write functions larger and smaller that each accept two strings as arguments, and return the larger and smaller strings, respectively.
*/

function larger (string1, string2) {
  if (string1.length > string2.length) {
    return string1;
  } else if (string2.length > string1.length) {
    return string2;
  } else {
    return "The Strings are equal";
  }
}
larger("I love Soylent", "Soylent loves me");
//=> 'Soylent loves me'


function smaller (string1, string2) {
  if (string1.length < string2.length) {
    return string1;
  } else if (string2.length < string1.length) {
    return string2;
  } else {
    return "The Strings are equal";
  }
}
smaller("I love Soylent", "Soylent loves me");
//=> 'I love Soylent'




/*
Write the following functions that each accept a single number as an argument:

even: returns true if its argument is even, and false otherwise.
odd: the opposite of the above.
positive: returns true if its argument is positive, and false otherwise.
negative: the opposite of the above.
*/

function even (number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
even(237980);
//=> true

function odd (number) {
  if (number % 2 === 1) {
    return true;
  } else {
    return false;
  }
}
odd(2390);
//=> false

function negative (number) {
  if (number < 0) {
    return true;
  } else {
    return false;
  }
}
negative(-2190);
//=> true

function positive (number) {
  if (number >= 0) {
    return true;
  } else {
    return false;
  }
}
positive(-2323);
//=> false

/* 
Math
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

Math.random()
Returns a pseudo-random number between 0 and 1.

Math.floor(x)
Returns the largest integer less than or equal to a number.

Math.ceil(x)
Returns the smallest integer greater than or equal to a number.

*/


/*
randInt: Should accept a single numeric argument (n), and return a number from 0 to n.
guessMyNumber: Should accept a single numeric argument and compare it to a random number between 0 and 5. 
It should return one of the following strings:

"You guessed my number!" if the argument matches the random number.
"Nope! That wasn't it!" if the argument did not match the random number.
*/

function randInt (n) {
  return Math.floor((Math.random()*n) + 1);
}

function guessMyNumber (num) {
  if (num === Math.floor((Math.random()*5)) + 1) {
      return "You guessed my number!";
      } else {
      return "Nope! That wasn't it!";
      }
}
guessMyNumber(3);
//=> 'You guessed my number!'


/*
Conditionals: else if & else

This guy named "Joe" keeps blacking out at the bar that your function, bouncer (from the previous module), 
is in charge of; thus, management has decided to add him to the "blacklist" -- modify the bouncer function from the previous section so that the person named "Joe" is rejected with an appropriate message, regardless of his age.

*/

function bouncer (name, age) {
  if (age >= 21 && name != "Joe") {
    return "Welcome, " + name;
  } else if (name === "Joe") {
    return "Go Home, Joe!!";
  } else {
    return "Go home, " + name;
  }
}
bouncer("Joe",22);
//=> 'Go Home, Joe!!'

/*
Write a function called scoreToGrade that accepts a number as a parameter and returns a string 
representing a letter grade corresponding to that score.

For example, the following grades should be returned given these scores:

'A' > 90
'B' >= 80
'C' >= 70
'D' >= 60
'F' < 60
function scoreToGrade(score) {
  // TODO: your code here
}
scoreToGrade(95); // => 'A'
scoreToGrade(72); // => 'C'
*/


function scoreToGrade (number) {
  if(number > 90) {
    return "A";
  } else if(number >= 80) {
    return "B";
  } else if(number >=70) {
    return "C";
  } else if(number >=60) {
    return "D";
  } else {
    return "F";
  }
}
scoreToGrade(99);
//=> 'A'

/*
Modify the scoreToGrade function so that it returns 'INVALID SCORE' if the score is greater than 100 or less than 0.
*/

function scoreToGrade (number) {
  if(number > 100 || number < 0) {
    return "INVALID SCORE";
  } else if(number >= 90) {
    return "A";
  } else if(number >= 80) {
    return "B";
  } else if(number >=70) {
    return "C";
  } else if(number >=60) {
    return "D";
  } else {
    return "F";
  }
}
scoreToGrade(128);
//=> 'INVALID SCORE'

/*
Modify the scoreToGrade function so that it returns 'A+/A-' for scores of 98-100/90-92 respectively. 
Apply the same logic for all other letter grades.
*/
function scoreToGrade (number) {
  if(number > 100 || number < 0) {
    return "INVALID SCORE";
  } else if(number >= 93 && number <= 97) {
    return "A";
  } else if(number >= 90 && number <= 92) {
    return "A-";
  }  else if(number >= 98 && number <= 100) {
    return "A+";
  } else if(number >= 83 && number <= 87) {
    return "B";
  } else if(number >= 80 && number <= 82) {
    return "B-";
  } else if(number >= 88 && number <= 89) {
    return "B+";
  } else if(number >= 78 && number <= 79) {
    return "C+";
  } else if(number >= 73 && number <= 77) {
    return "C";
  } else if(number >= 70 && number <= 72) {
    return "C-";
  } else if(number >= 68 && number <= 69) {
    return "D+";
  } else if(number >= 63 && number <= 67) {
    return "D";
  } else if(number >= 60 && number <= 62) {
    return "D-";
  } else if(number < 60 && number >= 0){
    return "F";
  }
}
scoreToGrade(82);
//=> 'B-'
scoreToGrade(62);
//=> 'D-'



/*
The guessMyNumber function from the Booleans & Conditionals module (More Practice section) 
accepts a guess n and checks it against a random number from 0 to 5 -- if the guess n is greater than 5, 
output a different message indicating that the guess is out of bounds.

NOTE: It will be helpful to first write a randInt function that accepts a number n and computes a random integer from 0 to n; then, you can use this function in guessMyNumber.
*/


function randInt (n) {
  return Math.floor((Math.random()*n) + 1);
}

function guessMyNumber (num) {
  if (num === Math.floor((Math.random()*5) + 1)) {
      return "You guessed my number!";
      } else {
      return "Nope! That wasn\'\t it!";
      }
}
guessMyNumber(3);
//=> 'You guessed my number!'


/*
The bar that employs our bouncer function has decided to do live music on Friday and Saturday nights, and will be admitting those that are over 18 to the bar on those nights; the catch however, is that all who are 21 or older will need to be given a wristband to distinguish them from the minors. Modify your bouncer function to handle this situation.
*/



function bouncer (age) {
  if (age < 18) {
    return "Too young to enter";
  } else if(age >= 18 && age <= 21) {
    return "Enter but no wristband for you";
  } else if(age >= 21) {
    return "Welcome, take a wristband";
  }
}
bouncer(19);
//=> 'Enter but no wristband for you'
bouncer(42);
//=> 'Welcome, take a wristband'

/*
You should have noticed a large amount of repetitive code when modifying scoreToGrade to accommodate + or - grades. When we do lots of repetitive things, that's a clear signal that there's a better way. Write a helper function letterGrade that accepts two arguments, letter and score, and works as follows:

function letterGrade(letter, score) {
  // your code here
}
// These are examples of what a *working* function would output.
letterGrade('A', 95); // => 'A'
letterGrade('A', 91); // => 'A-'
letterGrade('B', 88); // => 'B+'
letterGrade('monkey', 160); // => 'monkey-'
*/

function letterGrade(letter, score) {
  if(score % 10 >= 8){
    return letter + "+";
  } else if(letter % 10 <= 2) {
    return letter + "-";
  } else if(letter === "F"){
    return letter;
  } else {
    return letter;
  }
}

letterGrade("F", 20);
//=> 'F'

letterGrade("B", 89);
//=> 'B+'



/*
Finally, use letterGrade to remove the repetition in scoreToGrade.
*/

function scoreToGrade(score){
  if(score > 100 || score < 0){
    return "Invalid Score";
  }
  else if(score > 90){
    return letterGrade("A", score);
  }
   else if(score >=80){
    return letterGrade("B", score);
  }
   else if(score >=70){
    return letterGrade("C", score);
  }
   else if(score >=60){
    return letterGrade("D", score);
  }
   else{
    return "F";
  }
}
scoreToGrade(71);
//=> 'C'

/*
It turns out that we can write logical and and logical or in terms of each other and logical not using De Morgan's Laws.
*/
/*
Write a function or that works like ||, but only uses ! and &&.
*/
/*
Write a function and that works like &&, but only uses ! and ||.
*/


