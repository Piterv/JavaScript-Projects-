//A var that stores the name that user enters via prompt.
var name = prompt("What is your name?");

//Turn the first letter to upper case.
var upperCaseFirstChar = name.slice(0,1).toUpperCase();

//Turn the rest letters of the name to lower case.
var lowerCaseRestChar = name.slice(1, name.length).toLowerCase();

//Concatenate the first char with the rest of the char.
var userName = upperCaseFirstChar + lowerCaseRestChar;

//Show user greeting message using an alert.
alert("Hello, " + userName);
