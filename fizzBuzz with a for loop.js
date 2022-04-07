//An array to hold the generated fizzBuss(); function results.
var output = [];
//the function generates numbers from 1 to 100 and substitutes words for numbers divided without a remainder by 3,5, and 15.
function fizzBuss() {

  for (i = 1; i <= 100; i++) {
    if (i % 3 && i % 5 === 0) {
      output.push("fizzBuzz");
    } else if (i % 3 === 0) {
      output.push("fizz");
    } else if (i % 5 === 0) {
      output.push("fizzBuzz");
    } else {
      output.push(i);
    }
    console.log(output);
  }
}
// Calling function fizzBuss();
fizzBuss();
