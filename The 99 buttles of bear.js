var NumberOfButtles = 10;

while (NumberOfButtles >= 0) {

  var bouttleWord = "bottles";
  var NumberOfButtlesLeft = NumberOfButtles - 1;

  if (NumberOfButtles > 1) {
    console.log(NumberOfButtles + " bottles of beer on the wall, " + NumberOfButtles + " bottles of beer. Take one down and pass it around, " + NumberOfButtlesLeft + " buttles of beer on the wall.");
  } else if (NumberOfButtles === 1) {
    console.log(NumberOfButtles + " bottles of beer on the wall, " + NumberOfButtles + " bottles of beer. Take one down and pass it around, " + NumberOfButtlesLeft + " buttle of beer on the wall.");
  } else if (NumberOfButtles === 0) {
    bouttleWord = "bottle";
    console.log("No more bottle of beer on the wall!");
  }

  NumberOfButtles--;
}
