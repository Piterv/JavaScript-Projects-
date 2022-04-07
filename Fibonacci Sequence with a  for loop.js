// The function generates the given Fibonacci number.
function fibonacciGenerator(n){
    
    var output = []; 
    
    for(var i = 0; i < n; i++){

        var firstNumber = output[(i - 2)];
        var secondNumber = output[i - 1];
        var result = firstNumber + secondNumber;
        
        if(i === 0){
            output.push(0);
        }else if(i === 1){
            output.push(1);
        }else{
            output.push(result);
        }

    }
    return output;
}

output = fibonacciGenerator(20);
console.log(output);
