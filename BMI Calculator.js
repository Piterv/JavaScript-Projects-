//Function takes weight and height inputs and gives the calculated BMI value.

function bmiCalculator(){ 
    
    var weight = prompt("what is your weight?"); //Store weight parameter.
    var height = prompt("What is your height?"); // Store heigh information.
    
    var bmi = Math.round(weight / (Math.pow(height, 2)));
    var interpretation;
     
    if(bmi < 18.5){
        interpretation = "Your BMI is " + bmi + ", so you are underweight.";
    }if(bmi >= 18.5 && bmi <= 24.9){
        interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
    }if(bmi > 24.9){
        interpretation = "Your BMI is " + bmi + ", so you are overweight.";
    }
    
    return interpretation;
}

alert(bmiCalculator());
