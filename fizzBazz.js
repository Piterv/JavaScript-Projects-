var output = [];
var count = 1;

function fizzBuzz() {

  output.push(count);

  if (count % 3 === 0) {
    if (count % 3 === 0 && count % 5 === 0) {
      count++;
      output.pop();
      output.push("fizzBuzz");
    } else {
      count++;
      output.pop();
      output.push("fizz");
    }
  } else if (count % 5 === 0) {
    count++;
    output.pop();
    output.push("Bazz");
  } else {
    count++;
  }
}

fizzBuzz();
