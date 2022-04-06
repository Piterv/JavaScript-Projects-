var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

function whosPayng() {

  var randomNumber = Math.floor(Math.random() * names.length);
  var randomName = names[randomNumber];

  return randomName + " is going to buy lunch today!"
}

whosPayng(names);
