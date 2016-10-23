
/*

Hack Reactor/MakerSquare's JavaScript admissions challenge

http://admissions.hackreactor.com/#/
http://www.hackreactor.com/prepare-for-admissions-challenge/
In place of a traditional application form, this quick coding challenge will test your understanding of basic JavaScript syntax and start you on your admissions journey. If you're new to programming or JavaScript, don't be deterred. You can learn everything you need to get started through free online courses at CodeSchool and CodeAcademy, or by reading Eloquent JavaScript.

Instructions:

First, declare an array named myArray
Great! Now populate myArray with two strings. Put your full name in the first string, and your Skype handle in the second.
Next, declare a function named cutName. It should take a string as an argument.
cutName should return an array by breaking up the input string into individual words. For example "Douglas Crockford" should be returned as ["Douglas", "Crockford"]
Make a new empty object literal named myData
Add three key-value pairs to myData, by following these guidelines fullName : call cutName on the name string stored in myArray skype : refer to your Skype handle in myArray github : If you have a github handle, enter it as a string. If not, set this to null

*/

var myArray = ['Morgan Missen', 'glitchyhologram'];
var cutName = function(str){
  return str.split(' ');
};

var myData = {
  fullName: cutName(myArray[0]),
  skype: myArray[1],
  github: 'm10n'
};


/*
Nice work! Your application form is almost complete. Your coding window now has access to an object called Admissions with a method named showApp. 
Call this method without any arguments.
*/

Admissions.showApp();
