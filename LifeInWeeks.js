function lifeInWeeks(age){

    var yearsLeft = expactedYearsToLive - userAge;
    var daysLeft = yearsLeft * 365;
    var weeksLeft = yearsLeft * 52;
    var monthsLeft = yearsLeft * 12;

    alert("You have " + daysLeft + " days, " + weeksLeft + " weeks, and " + monthsLeft + " months left.");
    }

var expactedYearsToLive = prompt("What is your expected age to live?");
var userAge = prompt("How old re you?");

lifeInWeeks();
