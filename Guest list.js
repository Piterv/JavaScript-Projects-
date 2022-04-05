var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];
var guestNumber = guestList.length;
var guestName = prompt("What is your name?");

function lisOfInvitedGuests(name){

    if(name === guestList[0]){
        return alert("Hello " + name);
    }else if(name === guestList[1]){
        return alert("Hello " + name);
    }else if(name === guestList[2]){
        return alert("Hello " + name);
    }else if(name === guestList[3]){
        return alert("Hello " + name);
    }else if(name === guestList[4]){
        return alert("Hello " + name);
    }else if(name === guestList[5]){

    }
    return alert("Hello " + name + ", you are not invated") ;
}

lisOfInvitedGuests(guestName);
