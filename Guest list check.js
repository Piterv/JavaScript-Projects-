//List of invited guests.
var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];
//The name of the guest to check if invited.
var guestName = prompt("What is your name?");

//Guest name verefication function.
function nameVerefication(name){
    var nameCheck = guestList.includes(guestName);

    if(nameCheck === true){
        return "Welcome " + name + ", we are glad to see you!";
    }else{
        return "Hello " + name + ", we are sorry but your are not in the invited list";
    }
}
//Verification function with the next text message to the guest.
alert(nameVerefication(guestName));
