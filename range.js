// . Write a JavaScript program to check whether a given number is in a given range. e.g. 60, rage 50-100 returns true
// var min;
// var max;
// var num;

// function isInRange( num, min, number(max)) {
//   if (num >= min && num <= max) {
//     return true;
//   } else {
//     return false;
//   }
// }
// let min= prompt("Enter minimum number:");
// let max= prompt("Enter maximum number:");
// let num= prompt("Enter number to choose from:");

// isInRange();

// var result = isInRange(number, rangeMin, rangeMax);

// console.log(result);


function isInRange(number, min, max) {
  if (number >= min && number <= max) {
    return true;
  } else {
    return false;
  }
}

var number = prompt("Enter a number");
var rangeMin = 50;
var rangeMax = 100;

var result = isInRange(number, rangeMin, rangeMax);

console.log(result);

