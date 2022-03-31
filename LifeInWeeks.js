function lifeInWeeks(years, age){

    var yearsRemaining = years - age;
    var days = yearsRemaining * 365;
    var weeks = yearsRemaining * 52;
    var months = yearsRemaining * 12;

    alert("You have " + days + " days, " + weeks + " weeks, and " + months + " months left.");
    }

var expactedYears = prompt("What is your expected age to live?");
var userAge = prompt("How old re you?");

lifeInWeeks(expactedYears, userAge);
