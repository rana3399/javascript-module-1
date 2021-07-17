/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts 
  with A and is longer than 7 letters.
*/

// write your code here

var namesArray = ["Rakesh", "Antonio", "Alexandra", "Andronicus", "Annam", "Mikey", "Anastasia", "Karim", "Ahmed"];


 var longlNameStartsWith = namesArray.find(x => x.startsWith("A") && x.length > 7);
  
console.log(longlNameStartsWith);

/* EXPECTED OUTPUT */
// "Alexandra"
