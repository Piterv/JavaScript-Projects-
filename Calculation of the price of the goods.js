//Store input information from user.
var productName = prompt("What do you want to buy?");
var spendMoney = prompt("How much do you plan to spend?");
var productPrice = prompt("How much does one cost?");

//Gives results to the user.
function getProduct(money, price){

    return alert("You can buy only, " + calcChange(money, price) + " amount of " + productName + ", and your change is $" + calcNumberOfProducts(money, price));
}
//Calculation of the change to be provided to the user.
function calcChange(money, price){
    var amountOfProducts = Math.floor(money / price);
    return amountOfProducts
}
//Calculating how many products a user can buy for the money he has.
function calcNumberOfProducts(money, price){
    var change = money % price;
    return change;
}
// Call fanction getProduct.
getProduct(spendMoney, productPrice)
