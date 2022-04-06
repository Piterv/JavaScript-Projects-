var output = [];
var count = 1;

function fizzBuzz() {

  output.push(count);
  
  if (count % 3 === 0 && count % 5 === 0) {
    output.push("FizzBuzz");
  } else if (count % 3 === 0) {
    output.push("Fizz");
  } else if (count % 5 === 0) {
    output.push("Bazz");
  } else if (count === 100) {
    console.log(output);
  } 
  count++;
  console.log(output);
}
// Calling function.
fizzBuzz();
