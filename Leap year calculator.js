function isLeap(year) {
  var result;

  if (year % 4 === 0) {

    if (year % 100 === 0) {
      if (year % 400 === 0) {
        result = year + " is a leap year.";
      } else {
        result = year + " is not a leap year."
      }
    } else {
      result = year + " is a leap year.";
    }
  } else {
    result = year + " is not a leap year.";
  }

  return alert(result);
}

isLeap(prompt("Is a leap year?"));
