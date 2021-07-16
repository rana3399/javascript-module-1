/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts 
  with A and is longer than 7 letters.
*/

// write your code here

var namesArray = ["Rakesh", "Antonio", "Alexandra", "Andronicus", "Annam", "Mikey", "Anastasia", "Karim", "Ahmed"];


function startsWith_A(names){
    names.find((anyName) =>{
        var result = anyName.startsWith('A');
        console.log(result);
    });

    function isAboveThreshold(name) {
      return name.length > 7;
    }


console.log(startsWith_A(namesArray));

/* EXPECTED OUTPUT */
// "Alexandra"
