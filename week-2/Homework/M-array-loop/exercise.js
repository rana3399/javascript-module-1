/*
	Write a function that receives an array of string, and console.log all strings that start with letter 'T'
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
*/


var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

// var result = daysOfWeek.[startsWith("Mon")];
// console.log(result);

function startWithLetter_T (days){
	for(var i = 0; i < days.length; i++){
		var firstLetter = days[i].substring(0, 1);
		if(firstLetter == 'T'){
			return days[i];
		}
	}

}
console.log(startWithLetter_T(daysOfWeek))



// let str = "Hello world, welcome to the universe.";

// var startWith = str.startsWith("Hello")

// console.log(startWith);