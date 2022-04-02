//Love Calculator randomly calculates users' love ratings in the range of 1 to 100%

function loveCalculator (){
    var loveScore = Math.floor(Math.random() * 100) + 1; //Get random number from 1 to 100/
    var userName = prompt("What is your name?");
    var userPartnerName = prompt("Who do you love");
//Conditional statement.
    if(loveScore > 70){
        alert(userName + " ,and " + userPartnerName + " Your love score is phenomenal " + loveScore + "%");
    }if(loveScore > 30 && loveScore <= 70){
        alert(userName + " and " + userPartnerName + ", your love score is " + loveScore + "%")
    }if(loveScore <= 30){
        alert(userName + " and " + userPartnerName + ", your love score is " + loveScore + "%" + " You go together like oil and water.")
    }
}
loveCalculator();
