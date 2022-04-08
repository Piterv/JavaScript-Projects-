function fibonacci(n) {

  var output = [];

  if (n === 1) {
    output = [0];
  } else if (n === 2) {
    output = [0, 1];
  } else {
    output = [0, 1];

    var i = 2;
    while (i < n) {
      output.push(output[output.length - 2] + output[output.length - 1]);
      i++;
    }
  }
  return output;
}

var fibonacciNumbers = fibonacci(30);

console.log(fibonacciNumbers);
