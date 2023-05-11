// We have the following arrays : 
// color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
// o = ["th","st","nd","rd"]
// Write a JavaScript program to display the colors in the following way :
// "1st choice is Blue ."
// "2nd choice is Green."
// "3rd choice is Red."
let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
let o = ["th","st","nd","rd"];

for (var i = 0; i < color.length; i++) {
  var suffix;

  if (i + 1 === 1) {
    suffix = "st";
  } else if (i + 1 === 2) {
    suffix = "nd";
  } else if (i + 1 === 3) {
    suffix = "rd";
  } else {
    suffix = "th";
  }

  let choice = (i + 1) + suffix;
  let colorName = color[i];

  console.log(choice + " choice is " + colorName + ".");
}
