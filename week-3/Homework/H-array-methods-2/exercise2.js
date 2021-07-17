/*
  Array methods - .join()
  -------------------------
  Complete the capitalise function 
  It should return a string with the first letter in uppercase
  For example, capitailise("hello") should return "Hello"
  Tip: use the string method .split() and the array method .join()
*/

function capitalise(str) {

  var splitWords = str.split("");
  splitWords[0] = splitWords[0].toUpperCase();
  return splitWords.join("");

}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var name = "daniel";

console.log(capitalise(name));
console.log(capitalise("hello amanda"));

/* 
  EXPECTED RESULT
  ---------------
  Daniel
  Hello
*/
