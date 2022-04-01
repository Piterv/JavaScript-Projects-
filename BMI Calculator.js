//Function takes weight and height inputs and gives the calculated BMI value.
function bmiCalculator(weight, height){
    //Store weight parameter.
    var weight = prompt("what is your whait?");
    // Store heigh information.
    var height = prompt("What is your height?");
    //Calculate BMI value.
    var bmi = Math.round(weight / (height * 2));
    return bmi;
}

console.log(bmiCalculator(weight, height));
