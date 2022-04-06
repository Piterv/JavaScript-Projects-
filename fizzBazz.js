var output = [];
var count = 1;

function fizzBuzz() {
//Runs the code with the specified number.
  while (count < 100) {

    output.push(count);
    if (count % 3 === 0 && count % 5 === 0) {
      output.pop();
      output.push("FizzBuzz");
    } else if (count % 3 === 0) {
      output.pop();
      output.push("Fizz");
    } else if (count % 5 === 0) {
      output.pop();
      output.push("Bazz");
    }

    count++;
    console.log(output);
  }
}

fizzBuzz();
