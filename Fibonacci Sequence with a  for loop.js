// Array stores generated the Fibonacci sequence.
var fibonacciSequence = [];
// The function generates the given Fibonacci number.
function fibonacciGenerator(n) {
// Start for loop.
  for (i = 0; i < n; i++) {

    var firstNumber = fibonacciSequence[(i - 2)];
    var secondNumber = fibonacciSequence[i - 1];
    var result = firstNumber + secondNumber;

    if (i === 0) {
      fibonacciSequence.push(0);
    } else if (i === 1) {
      fibonacciSequence.push(1);
    } else {
      fibonacciSequence.push(result);
    }

    console.log(fibonacciSequence);
  }
// End for loop.
}

fibonacciGenerator(20);
