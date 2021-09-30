/*
	Write a function that receives an array of string, and console.log all strings that start with letter 'T'
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
*/


var daysOfWeek = ["Sunday", "Monday", "tuesday", "Wednesday", "Thursday", "Friday"];


// function startWithLetter_T (days){
// 	for(var i = 0; i < days.length; i++){
// 		var firstLetter = days[i].substring(0, 1);
// 		if(firstLetter == 'T'){

// 			console.log(days[i]);
// 			//return days[i];
// 		}
// 	}

// }

// -------------------------Example 2--------

// function startWithLetter_T (days){
// 	for(var i = 0; i < days.length; i++){
// 		var firstArray = days[i]
// 		console.log(firstArray);
// 		if(firstArray.toUpperCase() === "T" ){
// 			return days[i];
// 		}
// 	}

// }

// -------------------------Example 3--------

function startWithLetter_T (days){
	return	days.filter((day) =>{
		
		if(day[0].toLowerCase() === "t"){
			//console.log(day);
			return day;
		}	

	})

}


console.log(startWithLetter_T(daysOfWeek))



// let str = "Hello world, welcome to the universe.";

// var startWith = str.startsWith("Hello")

// console.log(startWith);